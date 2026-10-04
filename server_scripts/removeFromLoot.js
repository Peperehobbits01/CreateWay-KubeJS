LootJS.lootTables(event => {
    event.getLootTable("farmersdelight:chests/fd_abandoned_mineshaft").removeItem("farmersdelight:rope")

    const replacements = {
        "stellaris:steel_ingot": "create_ironworks:steel_ingot",
        "stellaris:steel_block": "create_ironworks:steel_block",
        "stellaris:steel_pickaxe": "create_ironworks:steel_pickaxe",
        "stellaris:steel_axe": "create_ironworks:steel_axe",
        "stellaris:steel_shovel": "create_ironworks:steel_shovel",
        "stellaris:steel_sword": "create_ironworks:steel_sword",
        "stellaris:steel_hoe": "create_ironworks:steel_hoe",
    }

    const earthOperationBaseTable = event.getLootTable("stellaris:chests/earth_operation_base")
    const earthSatelliteTable = event.getLootTable("stellaris:chests/earth_satellite")
    const marsDungeon = event.getLootTable("stellaris:chests/mars_dungeon")
    const marsDungeonBossTable = event.getLootTable("stellaris:chests/mars_dungeon_boss")
    const marsRuinsTable = event.getLootTable("stellaris:chests/mars_ruins")
    const marsTempleTable = event.getLootTable("stellaris:chests/mars_temple")
    const marsVaultTable = event.getLootTable("stellaris:chests/mars_vault")
    const mercuryCastleTable = event.getLootTable("stellaris:chests/mercury_castle")
    const mercuryCastleBigThroneTable = event.getLootTable("stellaris:chests/mercury_castle_big_throne")
    const mercuryCityTable = event.getLootTable("stellaris:chests/mercury_city")
    const mercuryFactoryTable = event.getLootTable("stellaris:chests/mercury_factory")
    const mercuryMinesTable = event.getLootTable("stellaris:chests/mercury_mines")
    const mercuryQuarryTable = event.getLootTable("stellaris:chests/mercury_quarry")
    const mercuryTempleTable = event.getLootTable("stellaris:chests/mercury_temple")
    const moonDestroyedSpaceStationTable = event.getLootTable("stellaris:chests/moon_destroyed_space_station")
    const moonDungeonTable = event.getLootTable("stellaris:chests/moon_dungeon")
    const moonDungeonBossTable = event.getLootTable("stellaris:chests/moon_dungeon_boss")
    const moonMinesTable = event.getLootTable("stellaris:chests/moon_mines")
    const moonSpaceStationTable = event.getLootTable("stellaris:chests/moon_space_station")
    const moonSphereTable = event.getLootTable("stellaris:chests/moon_sphere")
    const moonVillageTable = event.getLootTable("stellaris:chests/moon_village")
    const venusCityTable = event.getLootTable("stellaris:chests/venus_city")
    const venusCrashSiteCampTable = event.getLootTable("stellaris:chests/venus_crash_site_camp")
    const venusDungeonTable = event.getLootTable("stellaris:chests/venus_dungeon")
    const venusFlyingDungeonTable = event.getLootTable("stellaris:chests/venus_flying_dungeon")
    const venusOutpostTable = event.getLootTable("stellaris:chests/venus_outpost")
    const venusPlazaTable = event.getLootTable("stellaris:chests/venus_plaza")
    const venusTempleTable = event.getLootTable("stellaris:chests/venus_temple")

    for (const [oldItem, newItem] of Object.entries(replacements)) {
        earthOperationBaseTable.replaceItem(oldItem, newItem)
        earthSatelliteTable.replaceItem(newItem, newItem)
        marsDungeon.replaceItem(oldItem, newItem)
        marsDungeonBossTable.replaceItem(oldItem, newItem)
        marsRuinsTable.replaceItem(oldItem, newItem)
        marsTempleTable.replaceItem(oldItem, newItem)
        marsVaultTable.replaceItem(oldItem, newItem)
        mercuryCastleTable.replaceItem(oldItem, newItem)
        mercuryCastleBigThroneTable.replaceItem(oldItem, newItem)
        mercuryCityTable.replaceItem(oldItem, newItem)
        mercuryFactoryTable.replaceItem(oldItem, newItem)
        mercuryMinesTable.replaceItem(oldItem, newItem)
        mercuryQuarryTable.replaceItem(oldItem, newItem)
        mercuryTempleTable.replaceItem(oldItem, newItem)
        moonDestroyedSpaceStationTable.replaceItem(oldItem, newItem)
        moonDungeonTable.replaceItem(oldItem, newItem)
        moonDungeonBossTable.replaceItem(oldItem, newItem)
        moonMinesTable.replaceItem(oldItem, newItem)
        moonSpaceStationTable.replaceItem(oldItem, newItem)
        moonSphereTable.replaceItem(oldItem, newItem)
        moonVillageTable.replaceItem(oldItem, newItem)
        venusCityTable.replaceItem(oldItem, newItem)
        venusCrashSiteCampTable.replaceItem(oldItem, newItem)
        venusDungeonTable.replaceItem(oldItem, newItem)
        venusFlyingDungeonTable.replaceItem(oldItem, newItem)
        venusOutpostTable.replaceItem(oldItem, newItem)
        venusPlazaTable.replaceItem(oldItem, newItem)
        venusTempleTable.replaceItem(oldItem, newItem)
    }
})