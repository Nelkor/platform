const app = {
  currentDictionaries: [],
  currentView: '',
}

export const setCurrentView = name => {
  app.currentView = name
}

export const getCurrentView = () => app.currentView

export const setCurrentDictionaries = name => {
  app.currentView = name
}

export const getCurrentDictionaries = () => app.currentView
