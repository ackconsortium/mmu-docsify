(function () {
    const moveSearchBar = function (hook, vm) {
        hook.doneEach(function() {
            // const sidebar = document.querySelector('.sidebar');
            const searchElement = document.querySelector('.sidebar .search');
            // const sidebarReplace = searchElement.nextSibling;
            if (searchElement) {
                const navbar = document.querySelector('nav ul');
                const newLi = document.createElement('li');
                newLi.appendChild(searchElement);
                navbar.appendChild(newLi);
                // sidebar.insertBefore(searchElement, sidebarReplace);
            }
        });
    };
    $docsify = $docsify || {};
    $docsify.plugins = [].concat($docsify.plugins || [], moveSearchBar);
  })();