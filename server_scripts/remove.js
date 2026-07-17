ServerEvents.recipes(event => {    
    event.remove({ output: 'vinery:coarse_dirt_slab' })
    event.remove({ output: 'vinery:dirt_slab' })
    event.remove({ output: 'vinery:dirt_path_slab' })
    event.remove({ output: 'vinery:grass_slab' })
    event.remove({ output: 'create_connected:copycat_stairs ' })

    const AdornCopper = 'adorn:copper_nugget'

    event.replaceInput(
        { input: AdornCopper },
        AdornCopper,
        Ingredient.of('create:copper_nugget')
    )
    event.remove({ output: AdornCopper })

    const SKDCopper = 'skd:copper_nugget'

    event.replaceInput(
        { input: SKDCopper },
        SKDCopper,
        Ingredient.of('create:copper_nugget')
    )
    event.remove({ output: SKDCopper })

    const StellarisSteelNugget = 'stellaris:steel_nugget'

    event.replaceInput(
        { input: StellarisSteelNugget },
        StellarisSteelNugget,
        Ingredient.of('create_ironworks:steel_nugget')
    )
    event.remove({ output: StellarisSteelNugget })

    const StellarisSteelIngot = 'stellaris:steel_ingot'

    event.replaceInput(
        { input: StellarisSteelIngot },
        StellarisSteelIngot,
        Ingredient.of('create_ironworks:steel_ingot')
    )
    event.remove({ output: StellarisSteelIngot })

    const StellarisSteelBlock = 'stellaris:steel_block'

    event.replaceInput(
        { input: StellarisSteelBlock },
        StellarisSteelBlock,
        Ingredient.of('create_ironworks:steel_block')
    )
    event.remove({ output: StellarisSteelBlock })

    const TFMGSteelNugget = 'tfmg:steel_nugget'

    event.replaceInput(
        { input: TFMGSteelNugget },
        TFMGSteelNugget,
        Ingredient.of('create_ironworks:steel_nugget')
    )
    event.remove({ output: TFMGSteelNugget })

    const TFMGSteelIngot = 'tfmg:steel_ingot'

    event.replaceInput(
        { input: TFMGSteelIngot },
        TFMGSteelIngot,
        Ingredient.of('create_ironworks:steel_ingot')
    )
    event.remove({ output: TFMGSteelIngot })

    const TFMGSteelBlock = 'tfmg:steel_block'

    event.replaceInput(
        { input: TFMGSteelBlock },
        TFMGSteelBlock,
        Ingredient.of('create_ironworks:steel_block')
    )
    event.remove({ output: TFMGSteelNugget })

    const IronPlate = 'trafficcraft:iron_plate'

    event.replaceInput(
        { input: IronPlate },
        IronPlate,
        Ingredient.of('create:iron_sheet')
    )
    event.remove({ output: IronPlate })
})
