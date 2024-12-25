(function(){
    emailjs.init("JHSgBodSTPWtGvDFi"); 
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    emailjs.sendForm('service_vtl1ouf', 'template_9qg9csd', this)
        .then(function() {
            alert('Mensagem enviada com sucesso!');
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Falha ao enviar a mensagem: ' + JSON.stringify(error));
        });
});

