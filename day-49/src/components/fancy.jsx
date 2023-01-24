import React from 'react'

const fancy = () => {
    return (
        <div>
            const [isFancy, setIsFancy] = useState(false)
            return (
            <div className="App">
                <Counter1 isFancy={isFancy} />
                <label htmlFor="">
                    <input type="checkbox"
                        checked={isFancy}
                        onChange={(e) => {
                            setIsFancy(e.target.checked)
                        }}
                    />
                    Use Fancy styling
                </label>

            </div>
            );
        </div>
    )
}

export default fancy
