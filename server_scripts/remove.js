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
    event.remove({ output: 'create_new_age:magnetite_block'})
    event.remove({ output: 'create_new_age:redstone_magnet'})
    event.remove({ output: 'create_new_age:layered_magnet'})
    event.remove({ output: 'create_new_age:fluxuated_magnetite'})
    event.remove({ output: 'create_new_age:netherite_magnet'})
    event.remove({ output: 'create_new_age:basic_motor'})
    event.remove({ output: 'create_new_age:advanced_motor'})
    event.remove({ output: 'create_new_age:reinforced_motor'})
    event.remove({ output: 'create_new_age:basic_motor_extension'})
    event.remove({ output: 'create_new_age:advanced_motor_extension'})
    event.remove({ output: 'create_new_age:stirling_engine'})
    event.remove({ output: 'create_new_age:copper_wire_block'})
    event.remove({ output: 'create_new_age:overcharged_iron_wire_block'})
    event.remove({ output: 'create_new_age:overcharged_golden_wire_block'})
    event.remove({ output: 'create_new_age:overcharged_diamond_wire_block'})
    event.remove({ output: 'create_new_age:overcharged_diamond_wire'})
    event.remove({ output: 'create_new_age:overcharged_golden_wire'})
    event.remove({ output: 'create_new_age:overcharged_iron_wire'})
    event.remove({ output: 'create_new_age:copper_wire'})
    event.remove({ output: 'create_new_age:blank_circuit'})
    event.remove({ output: 'create_new_age:copper_circuit'})
    event.remove({ output: 'create_new_age:overcharged_iron_sheet'})
    event.remove({ output: 'create_new_age:overcharged_golden_sheet'})
    event.remove({ output: 'create_new_age:generator_coil'})
    event.remove({ output: 'create_new_age:electrical_connector'})
    event.remove({ output: 'create_new_age:carbon_brushes'})


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

    const ElectricalConnector = 'create_new_age:electrical_connector'

    event.replaceInput(
        { input: ElectricalConnector },
        ElectricalConnector,
        Ingredient.of('powergrid:device_connector')
    )
})
