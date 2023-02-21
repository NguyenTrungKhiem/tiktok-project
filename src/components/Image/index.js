import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss'

const Image = ({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    // eslint-disable-next-line jsx-a11y/alt-text
    const handleError = () => {
        setFallback(customFallback)
    };
    return <img ref={ref} className={ classNames(styles.wrapper ,className) } src={fallback || src} alt={alt} {...props} onError={handleError} />;
};

export default forwardRef(Image);
