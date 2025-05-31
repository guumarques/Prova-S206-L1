describe('teste de login', () => {
  
  //teste positivo
  it('teste de login completo', () => {
    let infos = gerarDados()
    let nome = infos[0]
    let senha = infos[1]

    const alertStub = cy.stub()
    cy.on('window:alert', alertStub)
    
    cadastrar(nome, senha)

    // Espera para o alerta do login de cadastro bem sucedido
    cy.wait(1000).then(() => {
      expect(alertStub.getCall(0)).to.be.calledWith('Sign up successful.') 
    })

    // Damos um tempo para o cadastro completar e o alerta de sucesso aparecer
    cy.wait(1000)

    login(nome, senha)
  })
  
  //-------------------------------------------------------------------------------------------------

  //teste negativo
  it('teste de login com senha incorreta', () => {
    let infos = gerarDados()
    let nome = infos[0]
    let senha = infos[1]

    const alertStub = cy.stub()
    cy.on('window:alert', alertStub)

    cadastrar(nome, senha)

    // Damos um tempo para o cadastro completar e o alerta de sucesso aparecer
    cy.wait(1000)

    login(nome, 'senha_incorreta')

    // Espera para o alerta do login falhar ser exibido
    cy.wait(1000).then(() => {
      // Mostra todos os alertas capturados (para debug, se quiser)
      // Verifica a segunda chamada do alert
      expect(alertStub.getCall(1)).to.be.calledWith('Wrong password.')
    })
  })

  it('teste de login sem preencher o campo de senha', () => {
    let infos = gerarDados()
    let nome = infos[0]
    let senha = infos[1]

    const alertStub = cy.stub()
    cy.on('window:alert', alertStub)

    cadastrar(nome, senha)

    // Espera para o alerta do login de cadastro bem sucedido
    cy.wait(1000).then(() => {
      expect(alertStub.getCall(0)).to.be.calledWith('Sign up successful.') 
    })

    // Damos um tempo para o cadastro completar e o alerta de sucesso aparecer
    cy.wait(1000)

    loginSemSenha(nome)

    // Espera para o alerta do login falhar ser exibido
    cy.wait(1000).then(() => {
      expect(alertStub.getCall(1)).to.be.calledWith('Please fill out Username and Password.') 
    })
  })
})

function gerarDados() //função para gerar nomes de usuário e senhas de teste
{
  let hora = new Date().getHours().toString()
  let minuto = new Date().getMinutes().toString()
  let segundos = new Date().getSeconds().toString()
  let nome = hora + minuto + segundos
  let senha = nome
  return [nome, senha]
}

function cadastrar(nome, senha) 
{
  cy.visit('https://www.demoblaze.com/index.html#')
  cy.get('#signin2').click()
  cy.wait(500)
  cy.get('#sign-username').type('user' + nome)
  cy.get('#sign-password').type(senha) // Corrigido
  cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
}

function loginSemSenha(nome) 
{
  cy.visit('https://www.demoblaze.com/index.html#')
  cy.wait(1000)
  cy.get('#login2').click()
  cy.wait(500)
  cy.get('#loginusername').type('user' + nome)
  cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
}
function login(nome, senha) 
{
  cy.visit('https://www.demoblaze.com/index.html#')
  cy.wait(1000)
  cy.get('#login2').click()
  cy.wait(500)
  cy.get('#loginusername').type('user' + nome)
  cy.get('#loginpassword').type(senha)
  cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
}
