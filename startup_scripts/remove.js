StartupEvents.modifyCreativeTab('vinery:vinery', event => {
    event.remove('vinery:coarse_dirt_slab')
    event.remove('vinery:dirt_slab')
    event.remove('vinery:wandering_winemaker_spawn_egg')
    event.remove('vinery:dirt_path_slab')
    event.remove('vinery:grass_slab')
})

StartupEvents.modifyCreativeTab('adorn:adorn', event => {
    event.remove('adorn:copper_nugget')
})

