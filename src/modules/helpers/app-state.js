const app = {
  currentDictionaries: [],
  currentView: '',
}

export const setCurrentView = name => {
  app.currentView = name
}

export const getCurrentView = () => app.currentView

export const setCurrentDictionaries = dictionaries => {
  app.currentDictionaries = dictionaries
}

export const getCurrentDictionaries = () => app.currentDictionaries
