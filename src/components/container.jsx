function Container(props) {

    return (
        <div className={'container-fluid'}>
            <div className="jumbotron bg">
                <h1>Employee Directory</h1>
                <h2>Search or Sort</h2>
                <input
                    type="text"
                    onChange={e => props.handleInputChange(e.target.value.toLowerCase())}
                />
            </div>
            {props.children}

        </div>
    )
}

export default Container