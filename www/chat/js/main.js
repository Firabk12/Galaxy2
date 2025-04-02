
/*=============== SHOW SIDEBAR ===============*/
const showSidebar = (toggleId, sidebarId, mainId) =>{
   const toggle = document.getElementById(toggleId),
         sidebar = document.getElementById(sidebarId),
         main = document.getElementById(mainId)
   
   if(toggle && sidebar && main){
      toggle.addEventListener('click', ()=>{
         /* Show sidebar */
         sidebar.classList.toggle('show-sidebar')
         /* Add padding main */
         main.classList.toggle('main-pd')
      })
   }
}
showSidebar('header-toggle','sidebar','main')

document.addEventListener('click', (e) => {
   const sidebar = document.getElementById('sidebar')
   const toggle = document.getElementById('header-toggle')
   const main = document.getElementById('main')

   // Check if sidebar is open and click is outside sidebar and not on toggle button
   if (sidebar && sidebar.classList.contains('show-sidebar') && 
       !sidebar.contains(e.target) && 
       !toggle.contains(e.target)) {
      
      // Close sidebar
      sidebar.classList.remove('show-sidebar')
      // Remove main padding
      main.classList.remove('main-pd')
   }
})


/*=============== LINK ACTIVE ===============*/
const sidebarLink = document.querySelectorAll('.sidebar__list a')

function linkColor(){
    sidebarLink.forEach(l => l.classList.remove('active-link'))
    this.classList.add('active-link')
}

sidebarLink.forEach(l => l.addEventListener('click', linkColor))

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-fill'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-clear-fill' : 'ri-sun-fill'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-clear-fill' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


