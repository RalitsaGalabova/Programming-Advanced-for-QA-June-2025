window.addEventListener('load', solve);

function solve() {
    function solve() {

    const carModelElement = document.getElementById('car-model')
    const carYearElement = document.getElementById('car-year')
    const partNameElement = document.getElementById('part-name')
    const partNumberElement = document.getElementById('part-number')
    const conditionElement = document.getElementById('condition')


    const purchaseCarModelElement = document.getElementById('info-car-model')
    const purchaseCarYearElement = document.getElementById('info-car-year')
    const purchasePartNameElement = document.getElementById('info-part-name')
    const purchasePartNumberElement = document.getElementById('info-part-number')
    const purchaseConditionElement = document.getElementById('info-condition')


    const partInfoElement = document.getElementById('part-info')
    const confirmOrderElement = document.getElementById('confirm-order')

    const nextButtonElement = document.getElementById('next-btn')
    nextButtonElement.addEventListener('click', onNext)

    function onNext(e) {
        e.preventDefault()

        const carYearAsNumber = Number(carYearElement.value)
        const isYearInRange = carYearAsNumber < 1990 || carYearAsNumber > 2025

        const areAllFieldsValid = carModelElement.value === '' || carYearElement.value === '' ||
            partNameElement.value === '' || partNumberElement === '' || conditionElement.value === '' || isYearInRange


        if (areAllFieldsValid) {
            return
        }

        purchaseCarModelElement.textContent = carModelElement.value
        purchaseCarYearElement.textContent = carYearElement.value
        purchasePartNameElement.textContent = partNameElement.value
        purchasePartNumberElement.textContent = partNumberElement.value
        purchaseConditionElement.textContent = conditionElement.value

        partInfoElement.style.display = 'block'
        nextButtonElement.disabled = true

        carModelElement.value = ''
        carYearElement.value = ''
        partNameElement.value = ''
        partNumberElement.value = ''
        conditionElement.value = ''
    }

    const editBtnElement = document.getElementById('edit-btn')

    editBtnElement.addEventListener('click', onEdit)

    function onEdit() {
        carModelElement.value = purchaseCarModelElement.textContent
        carYearElement.value = purchaseCarYearElement.textContent
        partNameElement.value = purchasePartNameElement.textContent
        partNumberElement.value = purchasePartNumberElement.textContent
        conditionElement.value = purchaseConditionElement.textContent

        partInfoElement.style.display = 'none'
        nextButtonElement.disabled = false
    }

    const confirmBtnElement = document.getElementById('confirm-btn')

    confirmBtnElement.addEventListener('click', () => {
        partInfoElement.style.display = 'none'
        confirmOrderElement.style.display = 'block'
    })

    const newOrderBtnElement = document.getElementById('new-btn')

    newOrderBtnElement.addEventListener('click', () => {
        confirmOrderElement.style.display = 'none'
        nextButtonElement.disabled = false
    })

};
};


    
    
