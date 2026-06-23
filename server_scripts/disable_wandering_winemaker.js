EntityEvents.spawned(event => {
  if (event.entity.type === 'vinery:wandering_winemaker') {
    event.cancel()
  }
})
