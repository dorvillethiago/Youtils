import styles from '@styles/components/Download/Button.module.scss'

interface ButtonProps {
    className ?: string,
    onClick ?: void
    format: 'mp3';
}

const formats = {
    'mp3' : 'MP3'
}

export default function Button({ className, onClick, format } : ButtonProps){
    return(
        <div className={className}>
            <button className={ styles.button }>Download {formats[format]}</button>
        </div>
    );
}