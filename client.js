window.TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      text: '🔄 Gerar E-mail',
      callback: function(t) {
        return t.card('id')
          .then(function(card) {
            const webhookUrl = `https://n8n.api-blogfeelgood.fun/webhook/gerar-email/?cardId=${card.id}`;
            return fetch(webhookUrl, {
              method: 'GET'
            })
            .then(() => t.alert({ message: '✅ Card atualizado com sucesso!' }))
            .catch(() => t.alert({ message: '❌ Erro ao atualizar o card.' }));
          });
      }
    }];
  }
});
