StartupEvents.modifyCreativeTab('vinery:vinery', event => {
    event.remove('vinery:coarse_dirt_slab')
    event.remove('vinery:dirt_slab')
    event.remove('vinery:wandering_winemaker_spawn_egg')
    event.remove('vinery:dirt_path_slab')
    event.remove('vinery:grass_slab')
})

StartupEvents.modifyCreativeTab('biomeswevegone:biomes_weve_gone', event => {
    event.remove('biomeswevegone:windswept_sand')
    event.remove('biomeswevegone:windswept_sandstone')
    event.remove('biomeswevegone:windswept_sandstone_stairs')
    event.remove('biomeswevegone:windswept_sandstone_slab')
    event.remove('biomeswevegone:windswept_sandstone_wall')
    event.remove('biomeswevegone:chiseled_windswept_sandstone')
    event.remove('biomeswevegone:smooth_windswept_sandstone')
    event.remove('biomeswevegone:cut_windswept_sandstone')
    event.remove('biomeswevegone:smooth_windswept_sandstone_stairs')
    event.remove('biomeswevegone:smooth_windswept_sandstone_slab')
    event.remove('biomeswevegone:cut_windswept_sandstone_slab')
    event.remove('biomeswevegone:windswept_sandstone_pillar')
})

StartupEvents.modifyCreativeTab('mcwbyg:tab', event => {
    event.remove('mcwbyg:windswept_sandstone_grass_topped_wall')
    event.remove('mcwbyg:windswept_sandstone_pillar_wall')
    event.remove('mcwbyg:windswept_sandstone_railing_gate')
    event.remove('mcwbyg:railing_windswept_sandstone_wall')
    event.remove('mcwbyg:modern_windswept_sandstone_wall')
    event.remove('mcwbyg:windswept_sandstone_upper_steep_roof')
    event.remove('mcwbyg:windswept_sandstone_upper_lower_roof')
    event.remove('mcwbyg:windswept_sandstone_steep_roof')
    event.remove('mcwbyg:windswept_sandstone_lower_roof')
    event.remove('mcwbyg:windswept_sandstone_top_roof')
    event.remove('mcwbyg:windswept_sandstone_attic_roof')
    event.remove('mcwbyg:windswept_sandstone_roof')
    event.remove('mcwbyg:balustrade_windswept_sandstone_bridge')
    event.remove('mcwbyg:windswept_sandstone_bridge_stair')
    event.remove('mcwbyg:windswept_sandstone_bridge_pier')
    event.remove('mcwbyg:windswept_sandstone_bridge')
})

StartupEvents.modifyCreativeTab('adorn:items', event => {
    event.remove('adorn:copper_nugget')
})

StartupEvents.modifyCreativeTab('skd:blocks_and_items', event => {
    event.remove('skd:copper_nugget')
})

StartupEvents.modifyCreativeTab('tfmg:tfmg_main', event => {
    event.remove('tfmg:steel_nugget')
    event.remove('tfmg:steel_ingot')
    event.remove('tfmg:steel_block')
})

StartupEvents.modifyCreativeTab('stellaris:stellaris', event => {
    event.remove('stellaris:steel_ingot')
    event.remove('stellaris:steel_nugget')
    event.remove('stellaris:steel_block')
})

StartupEvents.modifyCreativeTab('minecraft:ingredients', event => {
    event.remove('adorn:copper_nugget')
})

StartupEvents.modifyCreativeTab('trafficcraft:trafficcrafttab', event => {
    event.remove('trafficcraft:iron_plate')
})

StartupEvents.modifyCreativeTab('create_connected:main', event => {
    event.remove('create_connected:copycat_stairs')
})
