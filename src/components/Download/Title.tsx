
import styles from '@styles/components/Download/Title.module.scss';

interface TitleProps {
    className ?: string,
    title ?: string
}

export default function Title ({className, title} : TitleProps) {
    return(
        <div className={className}>
            <h3 className={ styles.title }>minecraft relaxing music that calms your mind</h3>
        </div>
    )
}