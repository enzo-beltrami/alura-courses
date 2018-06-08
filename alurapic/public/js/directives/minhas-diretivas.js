angular.module('minhasDiretivas', []).directive('meuPainel', () => {
  const ddo = {};

  ddo.restric = 'AE';

  ddo.scope = {
    titulo: '@',
  };

  ddo.transclude = true;

  ddo.templateUrl = 'js/directives/meu-painel.html';

  return ddo;
});
