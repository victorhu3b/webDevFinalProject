
var UserProfile = (function() {
  
    var getKey = function() {
      return localStorage.getItem('key');    
    };
  
    var setKey = function(k) {
        return localStorage.setItem('key', k);
    };
  
    return {
      getKey: getKey,
      setKey: setKey
    }
  
  })();
  
  export default UserProfile;