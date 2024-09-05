import React from 'react'
import { useState } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

const globalConstants = {
    AVERAGE_SALARY: 345,
    PROFIT_PER_BUILDING_LEVEL: 500,
    RETAIL_MODELING_QUALITY_WEIGHT: 0.3,
}
const newRetailModel = {
    0: {
        1: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 0.1530227279452043,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        2: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 0.23363484861934383,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        3: {
            buildingLevelsNeededPerHour: 0.8848617470138891,
            modeledProductionCostPerUnit: 1.3443057880333458,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 110,
        },
        4: {
            buildingLevelsNeededPerHour: 0.7621793771628567,
            modeledProductionCostPerUnit: 1.3882376098075626,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 90,
        },
        5: {
            buildingLevelsNeededPerHour: 0.794155499030178,
            modeledProductionCostPerUnit: 1.7042446242535634,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 80,
        },
        6: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 0.3813067036823652,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        7: {
            buildingLevelsNeededPerHour: 3.342243904354985,
            modeledProductionCostPerUnit: 24.98377551904246,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 35,
        },
        8: {
            buildingLevelsNeededPerHour: 2.4439984741503773,
            modeledProductionCostPerUnit: 6.72213881963258,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 110,
        },
        9: {
            buildingLevelsNeededPerHour: 1.6093864977160086,
            modeledProductionCostPerUnit: 0.7125887946138862,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 340,
        },
        10: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 16.110961494487565,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        11: {
            buildingLevelsNeededPerHour: 5.795682614246198,
            modeledProductionCostPerUnit: 22.67431233835862,
            modeledStoreWages: 379.5,
            modeledUnitsSoldAnHour: 103,
        },
        12: {
            buildingLevelsNeededPerHour: 5.879626836766338,
            modeledProductionCostPerUnit: 22.54278314009627,
            modeledStoreWages: 379.5,
            modeledUnitsSoldAnHour: 105,
        },
        13: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 0.20829017812399178,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        14: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 5.697408324477821,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        15: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 5.22794133648619,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        16: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 4.025295472751506,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        17: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 7.564285605409314,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        18: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 10.802340711632917,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        19: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 6.2113451092415,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        20: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 63.0443205690318,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        21: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 28.391028262023042,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        22: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 44.576725357134144,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        23: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 61.6347206632852,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        24: {
            buildingLevelsNeededPerHour: 1.6755899539964703,
            modeledProductionCostPerUnit: 313.798879301865,
            modeledStoreWages: 189.75,
            modeledUnitsSoldAnHour: 2,
        },
        25: {
            buildingLevelsNeededPerHour: 0.826647673655945,
            modeledProductionCostPerUnit: 386.2359406767831,
            modeledStoreWages: 189.75,
            modeledUnitsSoldAnHour: 0.8,
        },
        26: {
            buildingLevelsNeededPerHour: 1.9302373805280244,
            modeledProductionCostPerUnit: 607.7861475033761,
            modeledStoreWages: 189.75,
            modeledUnitsSoldAnHour: 1.2,
        },
        27: {
            buildingLevelsNeededPerHour: 1.4766325607232296,
            modeledProductionCostPerUnit: 280.00968037793444,
            modeledStoreWages: 189.75,
            modeledUnitsSoldAnHour: 2,
        },
        28: {
            buildingLevelsNeededPerHour: 2.2561511617453243,
            modeledProductionCostPerUnit: 476.7062435722529,
            modeledStoreWages: 189.75,
            modeledUnitsSoldAnHour: 1.8,
        },
        29: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 88.5755017716272,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        30: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 164.78210038312673,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        31: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 181.26031042143944,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        32: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 226.57538802679926,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        33: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 102.01515196346953,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        34: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 83.46694251556599,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        35: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 95.40016337970496,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        40: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 0.7665201016438937,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        41: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 2.24844490434701,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        42: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 2.765154559177421,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        43: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 6.326999798713763,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        44: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 0.5079242449145773,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        45: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 7.391795487546001,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        46: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 14.180558509434176,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        47: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 237.51429463921033,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        48: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 116.47194704767054,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        49: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 483.5739183753384,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        50: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 160.2206813325325,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        51: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 410.3792981346118,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        52: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 320.28531278240047,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        53: {
            buildingLevelsNeededPerHour: 9.344472763645863,
            modeledProductionCostPerUnit: 1730.9671689838988,
            modeledStoreWages: 417.45000000000005,
            modeledUnitsSoldAnHour: 2,
        },
        54: {
            buildingLevelsNeededPerHour: 4.50056370215423,
            modeledProductionCostPerUnit: 3278.461956819032,
            modeledStoreWages: 417.45000000000005,
            modeledUnitsSoldAnHour: 0.5,
        },
        55: {
            buildingLevelsNeededPerHour: 6.043600782087187,
            modeledProductionCostPerUnit: 1158.7683303533126,
            modeledStoreWages: 417.45000000000005,
            modeledUnitsSoldAnHour: 2,
        },
        56: {
            buildingLevelsNeededPerHour: 2.9483098251399085,
            modeledProductionCostPerUnit: 2222.1336356050774,
            modeledStoreWages: 417.45000000000005,
            modeledUnitsSoldAnHour: 0.5,
        },
        57: {
            buildingLevelsNeededPerHour: 7.084558543237653,
            modeledProductionCostPerUnit: 2881.671650559522,
            modeledStoreWages: 417.45000000000005,
            modeledUnitsSoldAnHour: 1,
        },
        58: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 122.80183534178973,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        59: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 62.523883603501545,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        60: {
            buildingLevelsNeededPerHour: 0.5418902911242732,
            modeledProductionCostPerUnit: 3.0664550470583083,
            modeledStoreWages: 341.55,
            modeledUnitsSoldAnHour: 25,
        },
        61: {
            buildingLevelsNeededPerHour: 1.2060762304599932,
            modeledProductionCostPerUnit: 9.161671345819464,
            modeledStoreWages: 341.55,
            modeledUnitsSoldAnHour: 20,
        },
        62: {
            buildingLevelsNeededPerHour: 2.7129952823418124,
            modeledProductionCostPerUnit: 10.750818424644207,
            modeledStoreWages: 341.55,
            modeledUnitsSoldAnHour: 45,
        },
        63: {
            buildingLevelsNeededPerHour: 3.1132088249603345,
            modeledProductionCostPerUnit: 16.807152388178515,
            modeledStoreWages: 341.55,
            modeledUnitsSoldAnHour: 30,
        },
        64: {
            buildingLevelsNeededPerHour: 3.0237700008902952,
            modeledProductionCostPerUnit: 23.27041811300111,
            modeledStoreWages: 341.55,
            modeledUnitsSoldAnHour: 20,
        },
        65: {
            buildingLevelsNeededPerHour: 0.561561083252753,
            modeledProductionCostPerUnit: 6.993789593574047,
            modeledStoreWages: 341.55,
            modeledUnitsSoldAnHour: 30,
        },
        66: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 0.13818529177181954,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        67: {
            buildingLevelsNeededPerHour: 6.48226412825268,
            modeledProductionCostPerUnit: 6.16892417453501,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 400,
        },
        68: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 17.75605765845925,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        69: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 3570.448674633533,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        70: {
            buildingLevelsNeededPerHour: 3.5985509935976054,
            modeledProductionCostPerUnit: 424.7213109870318,
            modeledStoreWages: 341.55,
            modeledUnitsSoldAnHour: 3,
        },
        71: {
            buildingLevelsNeededPerHour: 4.98871081918662,
            modeledProductionCostPerUnit: 895.8842092292283,
            modeledStoreWages: 341.55,
            modeledUnitsSoldAnHour: 2,
        },
        72: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 0.9969698221309433,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        73: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 16.873380608727793,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        74: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 12.274499530797177,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        75: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 3.5409734889363302,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        76: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 34.0661402094358,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        77: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 1527.4277087605587,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        78: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 1143.1293581454754,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        79: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 458.84134623491195,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        80: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 2602.388947989724,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        81: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 2780.658805350116,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        82: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 834.609612134535,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        83: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 18.864477664998823,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        84: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 5377.0766587789785,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        85: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 4639.6671611784595,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        86: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 5956.229066029027,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        87: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 292.6139377621802,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        88: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 6146.9642612040225,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        89: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 2573.0220528508544,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        90: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 54616.68946312846,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        91: {
            buildingLevelsNeededPerHour: 138.59322340271746,
            modeledProductionCostPerUnit: 60345.996725713834,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 1,
        },
        92: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 350004.64375671576,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        93: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 87594.56195595169,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        94: {
            buildingLevelsNeededPerHour: 985.6633600081573,
            modeledProductionCostPerUnit: 440868.1260168881,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 1,
        },
        95: {
            buildingLevelsNeededPerHour: 270.24708971382023,
            modeledProductionCostPerUnit: 121709.10415460453,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 1,
        },
        96: {
            buildingLevelsNeededPerHour: 94.09759859648443,
            modeledProductionCostPerUnit: 42823.99727953362,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 1,
        },
        97: {
            buildingLevelsNeededPerHour: 38.82062908528433,
            modeledProductionCostPerUnit: 18073.613119396607,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 1,
        },
        98: {
            buildingLevelsNeededPerHour: 1.0729059465031447,
            modeledProductionCostPerUnit: 432.7767902321064,
            modeledStoreWages: 189.75,
            modeledUnitsSoldAnHour: 1,
        },
        99: {
            buildingLevelsNeededPerHour: 63.7959621742625,
            modeledProductionCostPerUnit: 27736.369522744357,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 1,
        },
        100: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 502614.65757833014,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        101: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 96.55640399512112,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        102: {
            buildingLevelsNeededPerHour: 0.26081209145960516,
            modeledProductionCostPerUnit: 1.193797683567072,
            modeledStoreWages: 189.75,
            modeledUnitsSoldAnHour: 80,
        },
        103: {
            buildingLevelsNeededPerHour: 0.5597368539419953,
            modeledProductionCostPerUnit: 3.2112868979196696,
            modeledStoreWages: 189.75,
            modeledUnitsSoldAnHour: 60,
        },
        104: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 0.4186527135033211,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        105: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 0.6665432934335671,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        106: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 2.40224034520576,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        107: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 10.434009407179955,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        108: {
            buildingLevelsNeededPerHour: 1.9805936752272615,
            modeledProductionCostPerUnit: 5.146996120473464,
            modeledStoreWages: 189.75,
            modeledUnitsSoldAnHour: 120,
        },
        109: {
            buildingLevelsNeededPerHour: 4.022262714441176,
            modeledProductionCostPerUnit: 56.17917788503141,
            modeledStoreWages: 189.75,
            modeledUnitsSoldAnHour: 30,
        },
        110: {
            buildingLevelsNeededPerHour: 10.03930787532866,
            modeledProductionCostPerUnit: 96.17934506217765,
            modeledStoreWages: 189.75,
            modeledUnitsSoldAnHour: 40,
        },
        111: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 1284.6425554412153,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        112: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 1152.1797815556624,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        113: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 114.76704595890322,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        114: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 462.1894515686147,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        115: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 77.45202179617624,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        116: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 25.942099543345652,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        117: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 4.513476126397435,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 0,
        },
        118: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 0.5026575937302634,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        119: {
            buildingLevelsNeededPerHour: 8.050244531472217,
            modeledProductionCostPerUnit: 20.778117166349215,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 100,
        },
        120: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 1.5190646921002817,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        121: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 105.55712956891769,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 0,
        },
        122: {
            buildingLevelsNeededPerHour: 6.011970154825689,
            modeledProductionCostPerUnit: 70.1448979140915,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 30,
        },
        123: {
            buildingLevelsNeededPerHour: 4.587902185075239,
            modeledProductionCostPerUnit: 163.32461670256086,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 10,
        },
        124: {
            buildingLevelsNeededPerHour: 1.2132695660170452,
            modeledProductionCostPerUnit: 19.327677359176757,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 15,
        },
        125: {
            buildingLevelsNeededPerHour: 1.3631533957039998,
            modeledProductionCostPerUnit: 17.159826018457228,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 15,
        },
        126: {
            buildingLevelsNeededPerHour: 1.0185703378769284,
            modeledProductionCostPerUnit: 27.64219363094093,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 10,
        },
        127: {
            buildingLevelsNeededPerHour: 8.054487309477196,
            modeledProductionCostPerUnit: 259.537876911075,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 10,
        },
        128: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 40.84409009339989,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        129: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 1355.095158578456,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 0,
        },
        130: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 1275.0307141718356,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 0,
        },
        131: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 1498.5127981698638,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 0,
        },
        132: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 1414.7176273750083,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 0,
        },
        133: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 9.864742983931945,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        134: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 28.50930677827635,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 0,
        },
        135: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 9.824337424462756,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        136: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 0.9732677003953238,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        137: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 70.12692886026683,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        138: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 788.5567998007812,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        139: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 5.84288496586142,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        140: {
            buildingLevelsNeededPerHour: 6.219354988541133,
            modeledProductionCostPerUnit: 134.32476127051882,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 15,
        },
        141: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 25.188382917102135,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        142: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 449.65951059841024,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 0,
        },
        143: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 402.7343352861024,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 0,
        },
        144: {
            buildingLevelsNeededPerHour: 1.5650538107694372,
            modeledProductionCostPerUnit: 8.656581384492346,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 70,
        },
        145: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 127.32134870252276,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
    },
    1: {
        1: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 0.16128122917257817,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        2: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 0.2443774579557277,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        3: {
            buildingLevelsNeededPerHour: 0.9039243394634499,
            modeledProductionCostPerUnit: 1.3858094303634345,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 110,
        },
        4: {
            buildingLevelsNeededPerHour: 0.7782813554103776,
            modeledProductionCostPerUnit: 1.4303223605902133,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 90,
        },
        5: {
            buildingLevelsNeededPerHour: 0.8117377607668698,
            modeledProductionCostPerUnit: 1.758161562721152,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 80,
        },
        6: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 0.3909417622681449,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        7: {
            buildingLevelsNeededPerHour: 3.4557408236794704,
            modeledProductionCostPerUnit: 26.107063782608225,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 35,
        },
        8: {
            buildingLevelsNeededPerHour: 2.5401267549577518,
            modeledProductionCostPerUnit: 7.046581956294532,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 110,
        },
        9: {
            buildingLevelsNeededPerHour: 1.6405058115753934,
            modeledProductionCostPerUnit: 0.7292769680471267,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 340,
        },
        10: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 17.15173120637613,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        11: {
            buildingLevelsNeededPerHour: 6.10078489104059,
            modeledProductionCostPerUnit: 24.00011652274248,
            modeledStoreWages: 379.5,
            modeledUnitsSoldAnHour: 103,
        },
        12: {
            buildingLevelsNeededPerHour: 6.188845103286543,
            modeledProductionCostPerUnit: 23.86026902336927,
            modeledStoreWages: 379.5,
            modeledUnitsSoldAnHour: 105,
        },
        13: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 0.21874175863532475,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        14: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 5.959031259598084,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        15: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 5.4548090892767025,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        16: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 4.235145999073738,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        17: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 7.926662255503538,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        18: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 11.330053866277764,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        19: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 6.601446467448817,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        20: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 66.18993994261048,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        21: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 29.814921072905186,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        22: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 46.73308309140033,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        23: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 64.6888629290434,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        24: {
            buildingLevelsNeededPerHour: 1.757228800074665,
            modeledProductionCostPerUnit: 329.33500966377494,
            modeledStoreWages: 189.75,
            modeledUnitsSoldAnHour: 2,
        },
        25: {
            buildingLevelsNeededPerHour: 0.8668411526664558,
            modeledProductionCostPerUnit: 405.3539264590962,
            modeledStoreWages: 189.75,
            modeledUnitsSoldAnHour: 0.8,
        },
        26: {
            buildingLevelsNeededPerHour: 2.025133750311332,
            modeledProductionCostPerUnit: 638.1754481232036,
            modeledStoreWages: 189.75,
            modeledUnitsSoldAnHour: 1.2,
        },
        27: {
            buildingLevelsNeededPerHour: 1.54951672689547,
            modeledProductionCostPerUnit: 294.16211718069314,
            modeledStoreWages: 189.75,
            modeledUnitsSoldAnHour: 2,
        },
        28: {
            buildingLevelsNeededPerHour: 2.3678283715514343,
            modeledProductionCostPerUnit: 500.8252761109699,
            modeledStoreWages: 189.75,
            modeledUnitsSoldAnHour: 1.8,
        },
        29: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 93.76566320918754,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        30: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 177.52091907513022,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        31: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 195.27301098264329,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        32: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 244.0912637283041,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        33: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 107.52081944838548,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        34: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 87.97157954867903,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        35: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 102.77526893823331,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        40: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 0.7850766743502374,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        41: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 2.30375690151968,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        42: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 2.8845827576236185,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        43: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 6.634071518004573,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        44: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 0.5316409126731829,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        45: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 7.783333040870458,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        46: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 14.557519454523423,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        47: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 249.37310556447778,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        48: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 122.88732430327396,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        49: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 506.084641749638,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        50: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 168.16425278196093,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        51: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 430.7417714245457,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        52: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 339.47164501709165,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        53: {
            buildingLevelsNeededPerHour: 9.794915559881131,
            modeledProductionCostPerUnit: 1817.5537839187427,
            modeledStoreWages: 417.45000000000005,
            modeledUnitsSoldAnHour: 2,
        },
        54: {
            buildingLevelsNeededPerHour: 4.713823130644094,
            modeledProductionCostPerUnit: 3441.633210109271,
            modeledStoreWages: 417.45000000000005,
            modeledUnitsSoldAnHour: 0.5,
        },
        55: {
            buildingLevelsNeededPerHour: 6.345536562836658,
            modeledProductionCostPerUnit: 1219.8990021740833,
            modeledStoreWages: 417.45000000000005,
            modeledUnitsSoldAnHour: 2,
        },
        56: {
            buildingLevelsNeededPerHour: 3.0930688154211006,
            modeledProductionCostPerUnit: 2339.553506039372,
            modeledStoreWages: 417.45000000000005,
            modeledUnitsSoldAnHour: 0.5,
        },
        57: {
            buildingLevelsNeededPerHour: 7.460707968859185,
            modeledProductionCostPerUnit: 3045.215378262768,
            modeledStoreWages: 417.45000000000005,
            modeledUnitsSoldAnHour: 1,
        },
        58: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 131.71706269343548,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        59: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 66.18752697119119,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        60: {
            buildingLevelsNeededPerHour: 0.551733708268428,
            modeledProductionCostPerUnit: 3.1362257359147736,
            modeledStoreWages: 341.55,
            modeledUnitsSoldAnHour: 25,
        },
        61: {
            buildingLevelsNeededPerHour: 1.2296343337949505,
            modeledProductionCostPerUnit: 9.394549459952708,
            modeledStoreWages: 341.55,
            modeledUnitsSoldAnHour: 20,
        },
        62: {
            buildingLevelsNeededPerHour: 2.775487040748311,
            modeledProductionCostPerUnit: 11.12770965611805,
            modeledStoreWages: 341.55,
            modeledUnitsSoldAnHour: 45,
        },
        63: {
            buildingLevelsNeededPerHour: 3.1781332796817536,
            modeledProductionCostPerUnit: 17.286602160066415,
            modeledStoreWages: 341.55,
            modeledUnitsSoldAnHour: 30,
        },
        64: {
            buildingLevelsNeededPerHour: 3.0836186707684448,
            modeledProductionCostPerUnit: 23.87120299919537,
            modeledStoreWages: 341.55,
            modeledUnitsSoldAnHour: 20,
        },
        65: {
            buildingLevelsNeededPerHour: 0.5889614942075656,
            modeledProductionCostPerUnit: 7.3977210046962965,
            modeledStoreWages: 341.55,
            modeledUnitsSoldAnHour: 30,
        },
        66: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 0.14077835888829096,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        67: {
            buildingLevelsNeededPerHour: 6.8034998203163095,
            modeledProductionCostPerUnit: 6.484413034180247,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 400,
        },
        68: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 18.618214607918375,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        69: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 3743.918276108228,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        70: {
            buildingLevelsNeededPerHour: 3.764199914679231,
            modeledProductionCostPerUnit: 445.2390620197451,
            modeledStoreWages: 341.55,
            modeledUnitsSoldAnHour: 3,
        },
        71: {
            buildingLevelsNeededPerHour: 5.221669822402119,
            modeledProductionCostPerUnit: 939.3094443646374,
            modeledStoreWages: 341.55,
            modeledUnitsSoldAnHour: 2,
        },
        72: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 1.0338790757579617,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        73: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 17.527308799208352,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        74: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 13.065399941247822,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        75: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 3.7663921354828185,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        76: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 36.179183177834226,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        77: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 1624.6882461884995,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        78: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 1214.3491020673948,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        79: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 481.3289314736296,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        80: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 2744.1903150234416,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        81: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 2931.119260108793,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        82: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 889.0032512541425,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        83: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 20.065052487924447,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        84: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 5712.947822616762,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        85: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 4961.925962896368,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        86: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 6315.799406152318,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        87: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 308.5540630779644,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        88: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 6481.116871033805,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        89: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 2721.6946570060445,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        90: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 57809.529242414545,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        91: {
            buildingLevelsNeededPerHour: 146.4827870434139,
            modeledProductionCostPerUnit: 63971.32521944506,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 1,
        },
        92: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 371522.42084055237,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        93: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 92944.80504460703,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        94: {
            buildingLevelsNeededPerHour: 1043.3463637988102,
            modeledProductionCostPerUnit: 468066.8359275615,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 1,
        },
        95: {
            buildingLevelsNeededPerHour: 286.1840844922776,
            modeledProductionCostPerUnit: 129421.73354727181,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 1,
        },
        96: {
            buildingLevelsNeededPerHour: 99.70501453558225,
            modeledProductionCostPerUnit: 45536.191330114205,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 1,
        },
        97: {
            buildingLevelsNeededPerHour: 41.186777401805664,
            modeledProductionCostPerUnit: 19211.02508482617,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 1,
        },
        98: {
            buildingLevelsNeededPerHour: 1.1293732190169494,
            modeledProductionCostPerUnit: 456.9590044458487,
            modeledStoreWages: 189.75,
            modeledUnitsSoldAnHour: 1,
        },
        99: {
            buildingLevelsNeededPerHour: 67.4274892656665,
            modeledProductionCostPerUnit: 29489.08364542424,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 1,
        },
        100: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 533533.8070013912,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        101: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 101.09473647925276,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        102: {
            buildingLevelsNeededPerHour: 0.2732271675023166,
            modeledProductionCostPerUnit: 1.2512595715460795,
            modeledStoreWages: 189.75,
            modeledUnitsSoldAnHour: 80,
        },
        103: {
            buildingLevelsNeededPerHour: 0.5847590651989822,
            modeledProductionCostPerUnit: 3.3592180214001557,
            modeledStoreWages: 189.75,
            modeledUnitsSoldAnHour: 60,
        },
        104: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 0.4363844585515604,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        105: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 0.695916841073775,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        106: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 2.4653900265216233,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        107: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 10.99514427518313,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        108: {
            buildingLevelsNeededPerHour: 2.0611324460569334,
            modeledProductionCostPerUnit: 5.428119994457215,
            modeledStoreWages: 189.75,
            modeledUnitsSoldAnHour: 120,
        },
        109: {
            buildingLevelsNeededPerHour: 4.242218277196808,
            modeledProductionCostPerUnit: 59.34525731055675,
            modeledStoreWages: 189.75,
            modeledUnitsSoldAnHour: 30,
        },
        110: {
            buildingLevelsNeededPerHour: 10.54029608417163,
            modeledProductionCostPerUnit: 101.15883912297762,
            modeledStoreWages: 189.75,
            modeledUnitsSoldAnHour: 40,
        },
        111: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 1351.3528745519184,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        112: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 1216.591915995765,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        113: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 120.96092187943366,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        114: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 486.57244362623067,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        115: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 79.83152692280328,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        116: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 26.72865574200417,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        117: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 4.644175593378594,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 0,
        },
        118: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 0.513897821987704,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        119: {
            buildingLevelsNeededPerHour: 8.31965820630771,
            modeledProductionCostPerUnit: 21.668055696201822,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 100,
        },
        120: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 1.558288637215739,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        121: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 111.10484999328038,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 0,
        },
        122: {
            buildingLevelsNeededPerHour: 6.285514501098187,
            modeledProductionCostPerUnit: 73.5153317447319,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 30,
        },
        123: {
            buildingLevelsNeededPerHour: 4.800709561423246,
            modeledProductionCostPerUnit: 171.9774151587316,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 10,
        },
        124: {
            buildingLevelsNeededPerHour: 1.2507998801654876,
            modeledProductionCostPerUnit: 20.090881285593866,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 15,
        },
        125: {
            buildingLevelsNeededPerHour: 1.3963366974454359,
            modeledProductionCostPerUnit: 17.69129787320276,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 15,
        },
        126: {
            buildingLevelsNeededPerHour: 1.0544057868625505,
            modeledProductionCostPerUnit: 28.81633560579997,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 10,
        },
        127: {
            buildingLevelsNeededPerHour: 8.391977205507944,
            modeledProductionCostPerUnit: 272.1983540854805,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 10,
        },
        128: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 42.54766811076815,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        129: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 1464.6718224271067,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 0,
        },
        130: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 1380.6947445169058,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 0,
        },
        131: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 1623.0358321055737,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 0,
        },
        132: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 1525.8676015591511,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 0,
        },
        133: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 10.21388366463396,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        134: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 29.87055025723062,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 0,
        },
        135: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 10.297340510524693,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        136: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 0.9945590282820663,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        137: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 73.59858470960538,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        138: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 856.2462448781174,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        139: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 6.021552060347769,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        140: {
            buildingLevelsNeededPerHour: 6.481127800783182,
            modeledProductionCostPerUnit: 140.6298577066403,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 15,
        },
        141: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 26.07484102403296,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        142: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 482.13660359234376,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 0,
        },
        143: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 433.89562047411584,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 0,
        },
        144: {
            buildingLevelsNeededPerHour: 1.643950301036494,
            modeledProductionCostPerUnit: 9.10169862822773,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 70,
        },
        145: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 135.96780494409373,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
    },
    2: {
        1: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 0.16961084147915784,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        2: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 0.25513428950795275,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        3: {
            buildingLevelsNeededPerHour: 0.9227409261232832,
            modeledProductionCostPerUnit: 1.4271146702613828,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 110,
        },
        4: {
            buildingLevelsNeededPerHour: 0.7941671158907616,
            modeledProductionCostPerUnit: 1.4721915275924875,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 90,
        },
        5: {
            buildingLevelsNeededPerHour: 0.8291056766823511,
            modeledProductionCostPerUnit: 1.8118449245962616,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 80,
        },
        6: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 0.4004910520107218,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        7: {
            buildingLevelsNeededPerHour: 3.569269364981781,
            modeledProductionCostPerUnit: 27.236159609981534,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 35,
        },
        8: {
            buildingLevelsNeededPerHour: 2.6365764323739924,
            modeledProductionCostPerUnit: 7.373164779734834,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 110,
        },
        9: {
            buildingLevelsNeededPerHour: 1.6710045211567326,
            modeledProductionCostPerUnit: 0.7457356032185923,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 340,
        },
        10: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 18.21235382784998,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        11: {
            buildingLevelsNeededPerHour: 6.409820979782869,
            modeledProductionCostPerUnit: 25.346153686717084,
            modeledStoreWages: 379.5,
            modeledUnitsSoldAnHour: 103,
        },
        12: {
            buildingLevelsNeededPerHour: 6.502042291606895,
            modeledProductionCostPerUnit: 25.19784402194254,
            modeledStoreWages: 379.5,
            modeledUnitsSoldAnHour: 105,
        },
        13: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 0.22927831861028905,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        14: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 6.221358872890256,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        15: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 5.68177556250819,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        16: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 4.446556550978325,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        17: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 8.29061113893598,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        18: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 11.860456216391798,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        19: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 6.998306577335349,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        20: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 69.3517227093266,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        21: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 31.24692198442147,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        22: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 48.89876650719022,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        23: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 67.7594802724862,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        24: {
            buildingLevelsNeededPerHour: 1.8392307869443942,
            modeledProductionCostPerUnit: 344.9494349087166,
            modeledStoreWages: 189.75,
            modeledUnitsSoldAnHour: 2,
        },
        25: {
            buildingLevelsNeededPerHour: 0.9072130442023334,
            modeledProductionCostPerUnit: 424.5693713975946,
            modeledStoreWages: 189.75,
            modeledUnitsSoldAnHour: 0.8,
        },
        26: {
            buildingLevelsNeededPerHour: 2.120495964911704,
            modeledProductionCostPerUnit: 668.733955448407,
            modeledStoreWages: 189.75,
            modeledUnitsSoldAnHour: 1.2,
        },
        27: {
            buildingLevelsNeededPerHour: 1.622796237033601,
            modeledProductionCostPerUnit: 308.4046472015463,
            modeledStoreWages: 189.75,
            modeledUnitsSoldAnHour: 2,
        },
        28: {
            buildingLevelsNeededPerHour: 2.4801166612469117,
            modeledProductionCostPerUnit: 525.0973705473355,
            modeledStoreWages: 189.75,
            modeledUnitsSoldAnHour: 1.8,
        },
        29: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 99.02300372041307,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        30: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 190.64777094856262,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        31: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 209.7125480434189,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        32: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 262.1406850542736,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        33: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 113.07389431943858,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        34: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 92.515004443177,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        35: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 110.37502528600994,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        40: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 0.8034496220219165,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        41: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 2.358520309873682,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        42: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 3.0040356235387704,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        43: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 6.942628831216928,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        44: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 0.5554383342774439,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        45: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 8.177995063519798,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        46: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 14.931157256871273,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        47: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 261.29413494956924,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        48: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 129.3833582867293,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        49: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 528.6991012449563,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        50: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 176.16162580707348,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        51: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 451.2214067095202,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        52: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 359.0087792947597,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        53: {
            buildingLevelsNeededPerHour: 10.247586989380554,
            modeledProductionCostPerUnit: 1904.6909025403743,
            modeledStoreWages: 417.45000000000005,
            modeledUnitsSoldAnHour: 2,
        },
        54: {
            buildingLevelsNeededPerHour: 4.928088330614549,
            modeledProductionCostPerUnit: 3605.832810680735,
            modeledStoreWages: 417.45000000000005,
            modeledUnitsSoldAnHour: 0.5,
        },
        55: {
            buildingLevelsNeededPerHour: 6.649747052327421,
            modeledProductionCostPerUnit: 1281.6366908936352,
            modeledStoreWages: 417.45000000000005,
            modeledUnitsSoldAnHour: 2,
        },
        56: {
            buildingLevelsNeededPerHour: 3.238931080019829,
            modeledProductionCostPerUnit: 2458.181545372127,
            modeledStoreWages: 417.45000000000005,
            modeledUnitsSoldAnHour: 0.5,
        },
        57: {
            buildingLevelsNeededPerHour: 7.84111242358835,
            modeledProductionCostPerUnit: 3211.1791352673,
            modeledStoreWages: 417.45000000000005,
            modeledUnitsSoldAnHour: 1,
        },
        58: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 140.86456208923136,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        59: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 69.89859086146805,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        60: {
            buildingLevelsNeededPerHour: 0.561374788180691,
            modeledProductionCostPerUnit: 3.20508063620196,
            modeledStoreWages: 341.55,
            modeledUnitsSoldAnHour: 25,
        },
        61: {
            buildingLevelsNeededPerHour: 1.252767412051596,
            modeledProductionCostPerUnit: 9.625066529647327,
            modeledStoreWages: 341.55,
            modeledUnitsSoldAnHour: 20,
        },
        62: {
            buildingLevelsNeededPerHour: 2.8374228252326987,
            modeledProductionCostPerUnit: 11.505930577249828,
            modeledStoreWages: 341.55,
            modeledUnitsSoldAnHour: 45,
        },
        63: {
            buildingLevelsNeededPerHour: 3.242077846007338,
            modeledProductionCostPerUnit: 17.7634591245862,
            modeledStoreWages: 341.55,
            modeledUnitsSoldAnHour: 30,
        },
        64: {
            buildingLevelsNeededPerHour: 3.1424100174753655,
            modeledProductionCostPerUnit: 24.466105571887145,
            modeledStoreWages: 341.55,
            modeledUnitsSoldAnHour: 20,
        },
        65: {
            buildingLevelsNeededPerHour: 0.6166977404091037,
            modeledProductionCostPerUnit: 7.808059932953702,
            modeledStoreWages: 341.55,
            modeledUnitsSoldAnHour: 30,
        },
        66: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 0.14332794242981914,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        67: {
            buildingLevelsNeededPerHour: 7.126660643508605,
            modeledProductionCostPerUnit: 6.802184398114884,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 400,
        },
        68: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 19.484552180326737,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        69: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 3918.232941851299,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        70: {
            buildingLevelsNeededPerHour: 3.930402675021479,
            modeledProductionCostPerUnit: 465.85586655742173,
            modeledStoreWages: 341.55,
            modeledUnitsSoldAnHour: 3,
        },
        71: {
            buildingLevelsNeededPerHour: 5.455442554963582,
            modeledProductionCostPerUnit: 982.944476768138,
            modeledStoreWages: 341.55,
            modeledUnitsSoldAnHour: 2,
        },
        72: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 1.0707257669873356,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        73: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 18.18050434252546,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        74: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 13.87127892273643,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        75: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 3.9958588071658805,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        76: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 38.32727701279546,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        77: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 1723.7388514603813,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        78: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 1286.791905555978,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        79: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 503.922045318814,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        80: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 2887.896473660875,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        81: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 3083.545671748699,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        82: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 944.8218126285241,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        83: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 21.287332570147747,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        84: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 6054.664318718806,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        85: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 5292.384314266744,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        86: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 6682.140315152184,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        87: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 324.67741016454306,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        88: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 6819.351931756967,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        89: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 2872.75940029502,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        90: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 61051.796296770735,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        91: {
            buildingLevelsNeededPerHour: 154.4860974135826,
            modeledProductionCostPerUnit: 67660.09854058106,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 1,
        },
        92: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 393436.3789691772,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        93: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 98393.24629446938,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        94: {
            buildingLevelsNeededPerHour: 1101.9481976057255,
            modeledProductionCostPerUnit: 495777.37905227713,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 1,
        },
        95: {
            buildingLevelsNeededPerHour: 302.4003301618849,
            modeledProductionCostPerUnit: 137297.4089670789,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 1,
        },
        96: {
            buildingLevelsNeededPerHour: 105.41052711702983,
            modeledProductionCostPerUnit: 48306.150323387184,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 1,
        },
        97: {
            buildingLevelsNeededPerHour: 43.593294566336915,
            modeledProductionCostPerUnit: 20370.013900785707,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 1,
        },
        98: {
            buildingLevelsNeededPerHour: 1.1864339331263878,
            modeledProductionCostPerUnit: 481.4975573804186,
            modeledStoreWages: 189.75,
            modeledUnitsSoldAnHour: 1,
        },
        99: {
            buildingLevelsNeededPerHour: 71.12239411316322,
            modeledProductionCostPerUnit: 31284.358263937636,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 1,
        },
        100: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 565030.295031018,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        101: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 105.64811873623519,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        102: {
            buildingLevelsNeededPerHour: 0.28568140337754006,
            modeledProductionCostPerUnit: 1.308925351821991,
            modeledStoreWages: 189.75,
            modeledUnitsSoldAnHour: 80,
        },
        103: {
            buildingLevelsNeededPerHour: 0.6098121518026463,
            modeledProductionCostPerUnit: 3.50750347243771,
            modeledStoreWages: 189.75,
            modeledUnitsSoldAnHour: 60,
        },
        104: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 0.4541064353201161,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        105: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 0.7253228460281875,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        106: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 2.5280331512713805,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        107: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 11.561871861142876,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        108: {
            buildingLevelsNeededPerHour: 2.1424244886864887,
            modeledProductionCostPerUnit: 5.713306518872014,
            modeledStoreWages: 189.75,
            modeledUnitsSoldAnHour: 120,
        },
        109: {
            buildingLevelsNeededPerHour: 4.464566736882104,
            modeledProductionCostPerUnit: 62.54957154970918,
            modeledStoreWages: 189.75,
            modeledUnitsSoldAnHour: 30,
        },
        110: {
            buildingLevelsNeededPerHour: 11.04458395425626,
            modeledProductionCostPerUnit: 106.17765448670272,
            modeledStoreWages: 189.75,
            modeledUnitsSoldAnHour: 40,
        },
        111: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 1418.6288917639654,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        112: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 1281.8863409556893,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        113: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 127.20813110936838,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        114: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 511.16941094464545,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        115: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 82.20060369652597,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        116: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 27.511521020206484,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        117: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 4.774021928907049,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 0,
        },
        118: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 0.5250048221385529,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        119: {
            buildingLevelsNeededPerHour: 8.588603034200258,
            modeledProductionCostPerUnit: 22.560002367976455,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 100,
        },
        120: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 1.5971824763847906,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        121: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 116.7078395933395,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 0,
        },
        122: {
            buildingLevelsNeededPerHour: 6.559902635510863,
            modeledProductionCostPerUnit: 76.89883087303592,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 30,
        },
        123: {
            buildingLevelsNeededPerHour: 5.015163579248307,
            modeledProductionCostPerUnit: 180.71561518258233,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 10,
        },
        124: {
            buildingLevelsNeededPerHour: 1.2881474704432134,
            modeledProductionCostPerUnit: 20.85381658028583,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 15,
        },
        125: {
            buildingLevelsNeededPerHour: 1.4290933223223174,
            modeledProductionCostPerUnit: 18.218633767205972,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 15,
        },
        126: {
            buildingLevelsNeededPerHour: 1.090166438550099,
            modeledProductionCostPerUnit: 29.99188468177464,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 10,
        },
        127: {
            buildingLevelsNeededPerHour: 8.730752775523579,
            modeledProductionCostPerUnit: 284.93852218236646,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 10,
        },
        128: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 44.25414763241378,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        129: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 1578.2513433091874,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 0,
        },
        130: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 1490.3243466753481,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 0,
        },
        131: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 1752.2262423940267,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 0,
        },
        132: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 1640.980463282712,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 0,
        },
        133: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 10.562616871368963,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        134: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 31.23693454210506,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 0,
        },
        135: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 10.772172380277429,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        136: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 1.0155858739707542,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        137: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 77.09863810517429,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        138: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 926.5698824538155,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        139: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 6.199465802379527,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        140: {
            buildingLevelsNeededPerHour: 6.743440049795278,
            modeledProductionCostPerUnit: 146.95757170294513,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 15,
        },
        141: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 26.960156946946395,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
        142: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 515.6247087584338,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 0,
        },
        143: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 466.1806009937346,
            modeledStoreWages: 645.15,
            modeledUnitsSoldAnHour: 0,
        },
        144: {
            buildingLevelsNeededPerHour: 1.7233391119097825,
            modeledProductionCostPerUnit: 9.549906298162265,
            modeledStoreWages: 151.8,
            modeledUnitsSoldAnHour: 70,
        },
        145: {
            buildingLevelsNeededPerHour: 0,
            modeledProductionCostPerUnit: 144.80158528720887,
            modeledStoreWages: null,
            modeledUnitsSoldAnHour: 0,
        },
    },
}
function profitPerHour(
    econ,
    itemId,
    costPerUnit,
    salesSpeedBonus,
    sellPrice,
    quality,
    saturation,
    actualAdmin,
    storeBaseSalary,
    acceleration,
    buildingLevel
) {
    let uph = unitsPerHourSold(
        newRetailModel[econ][itemId],
        salesSpeedBonus,
        sellPrice,
        quality,
        saturation,
        acceleration,
        buildingLevel
    )

    let revenuePerUnit = sellPrice - (storeBaseSalary * actualAdmin) / uph
    let profitPerUnit = revenuePerUnit - costPerUnit
    let profitPerHour = profitPerUnit * uph
    return profitPerHour
}
//units sold per hour
function unitsPerHourSold(
    newModel,
    salesSpeedBonus,
    price,
    quality,
    saturation,
    acceleration,
    buildingLevel
) {
    const d = secondsToSell(
        newModel,
        100,
        salesSpeedBonus,
        price,
        quality,
        saturation,
        acceleration,
        buildingLevel
    )
    return (100 * 3600) / d
}
//the actual number of seconds it takes to sell some quantity of an item at a certain price in a retail store
function secondsToSell(
    newModel,
    quantity,
    salesSpeedBonus,
    price,
    quality,
    saturation,
    acceleration,
    level
) {
    const totalSecondsAtOneLevel = baseSecondsToSell(
        newModel,
        quality,
        saturation,
        quantity,
        price
    )
    if (totalSecondsAtOneLevel <= 0) return NaN
    const secondsLessAccel = totalSecondsAtOneLevel / acceleration / level
    return secondsLessAccel - (secondsLessAccel * salesSpeedBonus) / 100
}
function baseSecondsToSell(e, t, r, i, n) {
    var g, f, y, w
    const a = Math.min(Math.max(2 - r, 0), 2),
        s = a / 2 + 0.5,
        l = t / 12,
        d =
            
                globalConstants.PROFIT_PER_BUILDING_LEVEL *
                (e.buildingLevelsNeededPerHour + 1) *
                ((a / 2) *
                    (1 + l * globalConstants.RETAIL_MODELING_QUALITY_WEIGHT)) +
            ((g = e.modeledStoreWages) != null ? g : 0),
        u = e.modeledUnitsSoldAnHour * s,
        p = kNr(
            d,
            e.modeledProductionCostPerUnit,
            u,
            (f = e.modeledStoreWages) != null ? f : 0
        ),
        h = SNr(
            d,
            p,
            n,
            (y = e.modeledStoreWages) != null ? y : 0,
            e.modeledProductionCostPerUnit
        )
    return CNr(
        h,
        e.modeledProductionCostPerUnit,
        (w = e.modeledStoreWages) != null ? w : 0,
        n,
        i
    )
}
function kNr(e, t, r, i) {
    return t + (e + i) / r
}
function SNr(e, t, r, i, n) {
    const a = (i + e) / ((t - n) * (t - n))
    return e - (r - t) * (r - t) * a
}
function CNr(e, t, r, i, n = 1) {
    return (n * ((i - t) * 3600)) / (e + r)
}








function ThingsPerSec(e, t, r, i, n, a, s, l, c) {
    const d = pj1(e, t, r, 100, i, n, a, s, l, c);
    return 100 * 3600 / d
  }
  function pj1(e, t, r, i, n, a, s, l, c, d) {
    const u = xNr1(r, s, l, i, a);
    if (u <= 0) return NaN;
    const p = u / c / d;
    return p - p * n / 100
  }
  function xNr1(e, t, r, i, n) {
    var g,
    f,
    y,
    w;
    const a = Math.min(Math.max(2 - r, 0), 2),
    s = a / 2 + 0.5,
    l = t / 12,
    d = globalConstants.PROFIT_PER_BUILDING_LEVEL * (e.buildingLevelsNeededPerHour + 1) * (a / 2 * (1 + l * globalConstants.RETAIL_MODELING_QUALITY_WEIGHT)) + ((g = e.modeledStoreWages) != null ? g : 0),
    u = e.modeledUnitsSoldAnHour * s,
    p = wNr1(
      d,
      e.modeledProductionCostPerUnit,
      u,
      (f = e.modeledStoreWages) != null ? f : 0
    ),
    h = _Nr1(
      d,
      p,
      n,
      (y = e.modeledStoreWages) != null ? y : 0,
      e.modeledProductionCostPerUnit
    );
    return kNr1(
      h,
      e.modeledProductionCostPerUnit,
      (w = e.modeledStoreWages) != null ? w : 0,
      n,
      i
    )
  }
  
  function wNr1(e, t, r, i) {
    return t + (e + i) / r
  }
  function _Nr1(e, t, r, i, n) {
    const a = (i + e) / ((t - n) * (t - n));
    return e - (r - t) * (r - t) * a
  }
  function kNr1(e, t, r, i, n = 1) {
    return n * ((i - t) * 3600) / (e + r)
  }




















function CustMath(
    econ,
    itemId,
    costPerUnit,
    salesSpeedBonus,
    sellPrice,
    quality,
    saturation,
    actualAdmin,
    storeBaseSalary,
    acceleration,
    buildingLevel
) {
    return profitPerHour(
        econ,
        itemId,
        costPerUnit,
        salesSpeedBonus,
        sellPrice,
        quality,
        saturation,
        actualAdmin,
        storeBaseSalary,
        acceleration,
        buildingLevel
    )
}

function GenerateLabels(start, end, interval) {
    const length = Math.floor((end - start) / interval) + 1
    return Array.from({ length }, (_, i) =>
        parseFloat((start + i * interval).toFixed(10))
    )
}
const MyLineChart = ({props}) => {
    const options = {
        elements: {
            point: {
                borderWidth: 0,
                radius: 10,
                backgroundColor: 'rgba(0,0,0,0)',
            },
        },
    }
    const data = {
        labels: GenerateLabels(60, 70, 0.1),
        datasets: [
            {
                label: 'Petrol',
                function: function (x) {
                    return CustMath(
                        props.econ,
                        props.itemId,
                        props.costPerUnit,
                        props.salesSpeedBonus,
                        x,
                        props.quality,
                        props.saturation,
                        props.actualAdmin,
                        props.storeBaseSalary,
                        props.acceleration,
                        props.buildingLevel
                    )
                },
                borderColor: 'rgba(75, 192, 192, 1)',
                data: [],
                fill: false,
            },
        ],
    }

    const plugin = {
        beforeUpdate: function (chart) {
            var data = chart.config.data
            for (var i = 0; i < data.datasets.length; i++) {
                for (var j = 0; j < data.labels.length; j++) {
                    var fct = data.datasets[i].function,
                        x = data.labels[j],
                        y = fct(x)
                    data.datasets[i].data.push(y)
                }
            }
        },
    }

    return (
        <div style={{ width: '1000px', margin: '0 auto' }}>
            <Line data={data} plugins={[plugin]} options={options} />
        </div>
    )
}


const MyInputs = ({inputs,setInputs}) => {
    return (
        <div>
            <div>Econ Phase:    <input label={'Econ Phase'} value={inputs.econ} onChange={(e) => setInputs({...inputs,econ:e.target.value})} /></div>
            <div>ItemId:    <input label={'ItemId'} value={inputs.itemId} onChange={(e) => setInputs({...inputs,itemId:e.target.value})} /></div>
            <div>Item Cost:    <input label={'Item Cost'} value={inputs.costPerUnit} onChange={(e) => setInputs({...inputs, costPerUnit:e.target.value})} /></div>
            <div>Sales Speed Bonus:    <input label={'Sales Speed Bonus'}  value={inputs.salesSpeedBonus} onChange={(e) => setInputs({...inputs,salesSpeedBonus:e.target.value})} /></div>
            <div>Quality:    <input label={'Quality'}  value={inputs.quality} onChange={(e) => setInputs({...inputs,quality:e.target.value})} /></div>
            <div>Saturation:    <input label={'Saturation'}  value={inputs.saturation} onChange={(e) => setInputs({...inputs,saturation:e.target.value})} /></div>
            <div>Admin:    <input label={'Admin'}  value={inputs.actualAdmin} onChange={(e) => setInputs({...inputs,actualAdmin:e.target.value})} /></div>
            <div>Store Base Salary:     <input label={'Store Base Salary'}  value={inputs.storeBaseSalary} onChange={(e) => setInputs({...inputs,storeBaseSalary:e.target.value})} /></div>
        </div>
    )
}
export  {MyInputs,MyLineChart}

//https://www.simcompanies.com/api/v4/0/resources-retail-info/  -- gets all saturation for retail objs and their avg retail prices