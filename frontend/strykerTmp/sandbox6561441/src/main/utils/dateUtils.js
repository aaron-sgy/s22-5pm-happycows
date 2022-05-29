// @ts-nocheck
function stryNS_9fa48() {
  var g = new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});

  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }

  function retrieveNS() {
    return ns;
  }

  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}

stryNS_9fa48();

function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });

  function cover() {
    var c = cov.static;

    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }

    var a = arguments;

    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }

  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}

function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();

  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }

      return true;
    }

    return false;
  }

  stryMutAct_9fa48 = isActive;
  return isActive(id);
}

const padWithZero = n => {
  if (stryMutAct_9fa48("457")) {
    {}
  } else {
    stryCov_9fa48("457");
    return (stryMutAct_9fa48("461") ? n >= 10 : stryMutAct_9fa48("460") ? n <= 10 : stryMutAct_9fa48("459") ? false : stryMutAct_9fa48("458") ? true : (stryCov_9fa48("458", "459", "460", "461"), n < 10)) ? (stryMutAct_9fa48("462") ? "" : (stryCov_9fa48("462"), '0')) + n : n;
  }
};

const timestampToDate = timestamp => {
  if (stryMutAct_9fa48("463")) {
    {}
  } else {
    stryCov_9fa48("463");
    var date = new Date(timestamp);
    return date.getFullYear() + (stryMutAct_9fa48("464") ? "" : (stryCov_9fa48("464"), "-")) + padWithZero(stryMutAct_9fa48("465") ? date.getMonth() - 1 : (stryCov_9fa48("465"), date.getMonth() + 1)) + (stryMutAct_9fa48("466") ? "" : (stryCov_9fa48("466"), "-")) + padWithZero(date.getDate());
  }
};

export { timestampToDate, padWithZero };