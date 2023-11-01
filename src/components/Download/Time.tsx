
interface TimerProps {
    timer ?: number,
    className ?: string,
}

export default function Timer( { timer, className} : TimerProps ) {
    return (
        <div className={ className } >
            <p>04:57</p>
        </div>
    )
}