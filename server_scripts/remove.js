ServerEvents.recipes(event => {    
    event.remove({ output: 'vinery:coarse_dirt_slab' })
    event.remove({ output: 'vinery:dirt_slab' })
    event.remove({ output: 'vinery:dirt_path_slab' })
    event.remove({ output: 'vinery:grass_slab' })

    const AdornCopper = 'adorn:copper_nugget'

    event.replaceInput(
        { input: AdornCopper },
        AdornCopper,
        Ingredient.of('create:copper_nugget')
    )
    event.remove({ output: AdornCopper })

    const IronPlate = 'trafficcraft:iron_plate'

    event.replaceInput(
        { input: IronPlate },
        IronPlate,
        Ingredient.of('create:iron_sheet')
    )
    event.remove({ output: IronPlate })
})
