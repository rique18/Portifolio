const formulario = document.getElementById('meu-formulario');
const status = document.getElementById('status-mensagem');

formulario.addEventListener('submit', async (e) => {
    e.preventDefault(); // Impede o envio padrão da página
    
    const btn = document.getElementById('btn-enviar');
    btn.disabled = true;
    btn.innerText = "Enviando...";

    const formData = new FormData(formulario);
    
    try {
        const response = await fetch(formulario.action, {
            method: "POST",
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            status.innerHTML = "Obrigado! Sua mensagem foi enviada.";
            formulario.reset();
        } else {
            status.innerHTML = "Ops! Ocorreu um erro.";
        }
    } catch (error) {
        status.innerHTML = "Erro de conexão.";
    } finally {
        btn.disabled = false;
        btn.innerText = "Enviar";
    }
});