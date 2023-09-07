export const handleSubmit = (e : any, inputValue: string) => {
    e.preventDefault();
    document.querySelector('#modal')?.classList.remove('open')
    console.log(inputValue);
}

export const showModal = () => {
    document.querySelector('#modal')?.classList.add('open')
}