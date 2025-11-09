window.addEventListener("load", solve);

function solve() {
    
    const transportMode = document.getElementById('transport-mode')
    const departureTime = document.getElementById('departure-time')
    const passengerName = document.getElementById('passenger-name')
    const passengerEmail = document.getElementById('passenger-email')
    const passengerPhone = document.getElementById('passenger-phone')

    const previewTransportMode = document.getElementById('preview-transport-mode')
    const previewDepartureTime = document.getElementById('preview-departure-time')
    const previewPassangerName = document.getElementById('preview-passenger-name')
    const previewPassangerEmail = document.getElementById('preview-passenger-email')
    const previewPassangerPhone = document.getElementById('preview-passenger-phone')

    const previewSection = document.getElementById('preview')

    const editButton = document.getElementById('edit-btn')
    const confirmButton = document.getElementById('confirm-btn')

    const confirmationSection = document.getElementById('confirmation')

    const bookTransportButton = document.getElementById('book-btn')
    bookTransportButton.addEventListener('click', bookTransport)

    function bookTransport(e){

        e.preventDefault()

        const areAllFieldsVallid = transportMode.value === '' || departureTime.value ==='' || passengerName.value === ''
        passengerEmail.value === '' || passengerPhone === ''

        if(areAllFieldsVallid){
            return
        }

        previewTransportMode.textContent = transportMode.value
        previewDepartureTime.textContent = departureTime.value
        previewPassangerName.textContent = passengerName.value
        previewPassangerEmail.textContent = passengerEmail.value
        previewPassangerPhone.textContent = passengerPhone.value

        previewSection.style.display = 'block'
        bookTransportButton.disabled = true

        transportMode.value = ''
        departureTime.value = ''
        passengerName.value = ''
        passengerEmail.value = ''
        passengerPhone.value = ''


    }

    editButton.addEventListener('click', editTransport)

    function editTransport(e){
        e.preventDefault

        transportMode.value = previewTransportMode.textContent
        departureTime.value = previewDepartureTime.textContent
        passengerName.value = previewPassangerName.textContent
        passengerEmail.value = previewPassangerEmail.textContent
        passengerPhone.value = previewPassangerPhone.textContent
        previewSection.style.display = 'none'
        bookTransportButton.disabled = false

    }
    confirmButton.addEventListener('click', confirmTransport)

    function confirmTransport(e){
        e.preventDefault

        previewSection.style.display = 'none'
        confirmationSection.style.display = 'block'

    }

    const bookAnotherTransportButton = document.getElementById('back-btn')
    bookAnotherTransportButton.addEventListener("click", newTransport)

    function newTransport(e){
        e.preventDefault
        confirmationSection.style.display = 'none'
        bookTransportButton.disabled = false
    }

}