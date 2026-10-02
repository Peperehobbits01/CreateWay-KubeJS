ServerEvents.recipes(event => {    
    event.remove({ output: 'vinery:coarse_dirt_slab' })
    event.remove({ output: 'vinery:dirt_slab' })
    event.remove({ output: 'vinery:dirt_path_slab' })
    event.remove({ output: 'vinery:grass_slab' })
    event.remove({ output: 'create_connected:copycat_stairs' })
    event.remove({ output: 'create_connected:copycat_slab' })
    event.remove({ output: 'create_connected:copycat_block' })
    event.remove({ output: 'create_connected:copycat_beam' })
    event.remove({ output: 'create_connected:copycat_vertical_step' })
    event.remove({ output: 'create_connected:copycat_fence' })
    event.remove({ output: 'create_connected:copycat_fence_gate' })
    event.remove({ output: 'create_connected:copycat_wall' })
    event.remove({ output: 'create_connected:copycat_board' })
    event.remove({ output: 'create_connected:copycat_box' })
    event.remove({ output: 'create_connected:copycat_catwalk' })
    event.remove({ output: 'stellaris:steel_sword' })
    event.remove({ output: 'stellaris:steel_pickaxe' })
    event.remove({ output: 'stellaris:steel_axe' })
    event.remove({ output: 'stellaris:steel_shovel' })
    event.remove({ output: 'stellaris:steel_hoe' })
    event.remove({ output: 'trafficcraft:hammer' })
    event.remove({ input: 'trafficcraft:hammer' })
    event.remove({ input: 'create_ironworks:copper_armor_helmet' })
    event.remove({ input: 'create_ironworks:copper_armor_chestplate'})
    event.remove({ input: 'create_ironworks:copper_armor_leggings'})
    event.remove({ input: 'create_ironworks:copper_armor_boots'})
    event.remove({ input: 'create_sa:copper_helmet'})
    event.remove({ input: 'create_sa:copper_chestplate'})
    event.remove({ input: 'create_sa:copper_leggings'})
    event.remove({ input: 'create_sa:copper_boots'})
    event.remove({ input: 'create_sa:brass_helmet' })
    event.remove({ input: 'create_sa:brass_chestplate' })
    event.remove({ input: 'create_sa:brass_leggings'})
    event.remove({ input: 'create_sa:brass_boots'})
    event.remove({ output: 'create_ironworks:copper_armor_helmet'})
    event.remove({ output: 'create_ironworks:copper_armor_chestplate'})
    event.remove({ output: 'create_ironworks:copper_armor_leggings'})
    event.remove({ output: 'create_ironworks:copper_armor_boots'})
    event.remove({ output: 'create_sa:copper_helmet'})
    event.remove({ output: 'create_sa:copper_chestplate'})
    event.remove({ output: 'create_sa:copper_leggings'})
    event.remove({ output: 'create_sa:copper_boots'})
    event.remove({ output: 'create_sa:brass_helmet' })
    event.remove({ output: 'create_sa:brass_chestplate' })
    event.remove({ output: 'create_sa:brass_leggings'})
    event.remove({ output: 'create_sa:brass_boots'})
    event.remove({ input: 'create_sa:copper_sword'})
    event.remove({ input: 'create_sa:copper_pickaxe'})
    event.remove({ input: 'create_sa:copper_axe'})
    event.remove({ input: 'create_sa:copper_shovel'})
    event.remove({ input: 'create_sa:copper_hoe'})
    event.remove({ output: 'create_sa:copper_hoe'})
    event.remove({ output: 'create_sa:copper_shovel'})
    event.remove({ output: 'create_sa:copper_axe'})
    event.remove({ output: 'create_sa:copper_pickaxe'})
    event.remove({ output: 'create_sa:copper_sword'})
    event.remove({ input: 'create_sa:brass_sword'})
    event.remove({ input: 'create_sa:brass_pickaxe'})
    event.remove({ input: 'create_sa:brass_axe'})
    event.remove({ input: 'create_sa:brass_shovel'})
    event.remove({ input: 'create_sa:brass_hoe'})
    event.remove({ output: 'create_sa:brass_hoe'})
    event.remove({ output: 'create_sa:brass_shovel'})
    event.remove({ output: 'create_sa:brass_axe'})
    event.remove({ output: 'create_sa:brass_pickaxe'})
    event.remove({ output: 'create_sa:brass_sword'})
    event.remove({ output: 'createnuclear:coal_dust'})

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

    const IronPlate = 'trafficcraft:iron_plate'

    event.replaceInput(
        { input: IronPlate },
        IronPlate,
        Ingredient.of('create:iron_sheet')
    )
    event.remove({ output: IronPlate })

    const Rope = 'farmersdelight:rope'

    event.replaceInput(
        { input: Rope },
        Rope,
        Ingredient.of('supplementaries:rope')
    )

    event.replaceOutput(
        { input: Rope },
        Rope,
        Ingredient.of('supplementaries:rope')
    )

    const SteelNugget = 'createnuclear:steel_nugget'

    event.replaceInput(
        { input: SteelNugget },
        SteelNugget,
        Ingredient.of('create_ironworks:steel_nugget')
    )
    event.remove({ output: SteelNugget })

    const SteelBlock = 'createnuclear:steel_block'

    event.replaceInput(
        { input: SteelBlock },
        SteelBlock,
        Ingredient.of('create_ironworks:steel_block')
    )
    event.remove({ output: SteelBlock })

    const SteelIngot = 'createnuclear:steel_ingot'

    event.replaceInput(
        { input: SteelIngot },
        SteelIngot,
        Ingredient.of('create_ironworks:steel_ingot')
    )
    event.remove({ output: SteelIngot })
})
