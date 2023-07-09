const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click" , completeTask);
    return i;
}

const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
}//.toggle verifica si existe la clase, si esta la elimina y si no esta la crea

export default checkComplete;