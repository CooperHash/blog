const withLogClick = (Component) => {
    return (props) => {
        const onClick = () => {
            props.onClick()
        }

        return <Component {...props} onClick={onClick} className={props.className}/>
    }
}

export default withLogClick



