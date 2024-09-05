import retailModel from '../data/retail-model.json' 
import constantsCore from '../data/constants-core.json'

const newRetailModel = new Map(Object.entries(retailModel));


interface RetailDataTable{
    [key:string]:{
        [key:string]: 
            RetailData
    }
}
interface RetailData {
    buildingLevelsNeededPerHour:number;
    modeledProductionCostPerUnit: number;
    modeledStoreWages: number|null,
    modeledUnitsSoldAnHour: number
}
const typedRetailData:RetailDataTable = retailModel;

export function binarySearchProfitMaximization(
    econ: string,
    itemId: string,
    costPerUnit: number,
    salesSpeedBonus: number,
    quality: number,
    saturation: number,
    actualAdmin: number,
    storeBaseSalary: number,
    acceleration: number,
    buildingLevel: number,
    minPrice: number = 0,
    maxPrice: number = 15000,
    tolerance: number = 0.01
) {
    let left = minPrice;
    let right = maxPrice;

    while (right - left > tolerance) {
        const mid1 = left + (right - left) / 3;
        const mid2 = right - (right - left) / 3;

        const profit1 = profitPerHour(
            econ,
            itemId,
            costPerUnit,
            salesSpeedBonus,
            mid1,
            quality,
            saturation,
            actualAdmin,
            storeBaseSalary,
            acceleration,
            buildingLevel
        );

        const profit2 = profitPerHour(
            econ,
            itemId,
            costPerUnit,
            salesSpeedBonus,
            mid2,
            quality,
            saturation,
            actualAdmin,
            storeBaseSalary,
            acceleration,
            buildingLevel
        );

        if (profit1 < profit2) {
            left = mid1;
        } else {
            right = mid2;
        }
    }

    const bestPrice = (left + right) / 2;
    const maxProfit = profitPerHour(
        econ,
        itemId,
        costPerUnit,
        salesSpeedBonus,
        bestPrice,
        quality,
        saturation,
        actualAdmin,
        storeBaseSalary,
        acceleration,
        buildingLevel
    );

    return { price:bestPrice, pph:maxProfit };
}

export function getLineData(x:number){

}

export function profitPerHour(
    econ:string,
    itemId:string,
    costPerUnit:number,
    salesSpeedBonus:number,
    sellPrice:number,
    quality:number,
    saturation:number,
    actualAdmin:number,
    storeBaseSalary:number,
    acceleration:number,
    buildingLevel:number
) {
    const uph = unitsPerHourSold(
        typedRetailData[econ][itemId],
        salesSpeedBonus,
        sellPrice,
        quality,
        saturation,
        acceleration,
        buildingLevel
    )

    const revenuePerUnit = sellPrice - (storeBaseSalary * actualAdmin) / uph
    const profitPerUnit = revenuePerUnit - costPerUnit
    const profitPerHour = profitPerUnit * uph
    return profitPerHour
}
//units sold per hour
export function unitsPerHourSold(
    newModel:RetailData,
    salesSpeedBonus:number,
    price:number,
    quality:number,
    saturation:number,
    acceleration:number,
    buildingLevel:number
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
    newModel:RetailData,
    quantity:number,
    salesSpeedBonus:number,
    price:number,
    quality:number,
    saturation:number,
    acceleration:number,
    level:number
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
function baseSecondsToSell(e:RetailData, t:number, r:number, i:number, n:number) {
    let g, f, y, w
    const a = Math.min(Math.max(2 - r, 0), 2),
        s = a / 2 + 0.5,
        l = t / 12,
        d =
        constantsCore.PROFIT_PER_BUILDING_LEVEL *
                (e.buildingLevelsNeededPerHour + 1) *
                ((a / 2) *
                    (1 + l * constantsCore.RETAIL_MODELING_QUALITY_WEIGHT)) +
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
function kNr(e:number, t:number, r:number, i:number) {
    return t + (e + i) / r
}
function SNr(e:number, t:number, r:number, i:number, n:number) {
    const a = (i + e) / ((t - n) * (t - n))
    return e - (r - t) * (r - t) * a
}
function CNr(e:number, t:number, r:number, i:number, n = 1) {
    return (n * ((i - t) * 3600)) / (e + r)
}
