import { useState } from 'react';

export default function FeedBack() {
    const [text, setText] = useState("")
    const [isSending, setIsSending] = useState(false)
    const [isSent, setIsSent] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault();
        setIsSending(true)
        await setMessage(text)
        setIsSending(false)
        setIsSent(true)
    }

    if (isSent) {
        return <h1>Thanks for feedback</h1>
    }

    function setMessage(text) {
        return new Promise(resolve => {
            setTimeout(resolve, 2000)
        })
    }


    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <h1>Ta textee oruulna uu ?</h1>
                <textarea value={text} onChange={e => setText(e.target.value)}
                    disabled={isSending}
                    name="" id="" cols="30" rows="3"></textarea><br />
                <button>Send</button>
                {isSending && <p>Sending ....</p>}
            </form>
        </div>
    );
}