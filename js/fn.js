contact = () => {
    let { name, email, message } = this.state;
    let data = {
        name: "contact",
        params: {
            name,
            email,
            message
        }
    };
    data = JSON.stringify(data);
    axios({
        method: "post",
        data
    })
    .then((res) => {
        response = res.data;
        this.setState({ response });
    })
    .catch(() => {
        this.setState({ response: "Network Error" });
    })
}