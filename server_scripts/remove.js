ServerEvents.recipes(event => {    
    event.remove({ output: 'vinery:coarse_dirt_slab' })
    event.remove({ output: 'vinery:dirt_slab' })
    event.remove({ output: 'vinery:dirt_path_slab' })
    event.remove({ output: 'vinery:grass_slab' })

    const AdornCopper = 'adorn:copper_nugget'

    event.remove({ input: AdornCopper })
    event.remove({ output: AdornCopper })
})
