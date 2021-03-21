const app = {
  currentView: '',
}

export const setCurrentView = name => {
  app.currentView = name
}

export const getCurrentView = () => app.currentView
