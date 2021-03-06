const RelatorioVisita = require('../models/relatorio-visita.model')

module.exports = {
  dados(data = new RelatorioVisita()){
    const Data = {
      "ID relatorio": data._id,
      "Área Identificada": data.area_edificada,
      "Proprietário": data.proprietario,
      "Bombeiro": data.user.last_name,
      "Status": data.status
    }
    return Data
  },

  dadosForAdmin(data = new RelatorioVisita()){
    const Data = {
      "ID relatorio": data._id,
      "Área Identificada": data.area_edificada,
      "Proprietário": data.proprietario,
      "Bombeiro": {"Nome": data.user.name, "Sobrenome": data.user.last_name},
      "Status": data.status
    }
    return Data
  },
  
  renderMany(relatorios = new RelatorioVisita()){
    return relatorios.map(todo => this.dados(todo))
  },
  
  renderManyAdmin(relatorios = new RelatorioVisita()){
    return relatorios.map(todo => this.dadosForAdmin(todo))
  }
}
