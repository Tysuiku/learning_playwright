import { Page, expect} from "@playwright/test";
import { HelperBase } from "./helperBase";

export class DatepickerPage extends HelperBase{
    
    constructor(page: Page){
       super(page)
    }

    async selectCommonDatePickerDateFromToday(numberOfDaysFromToday: number){
        const calenderInputField = this.page.getByPlaceholder('Form Picker')
        await calenderInputField.click()
        const dateToAssert = await this.selectDateInTheCalender(numberOfDaysFromToday)
        await expect(calenderInputField).toHaveValue(dateToAssert)
    }

    async selectDatePickerWithRangeFromToday(startDayFromToday: number, endDayFromToday: number){
        const calenderInputField = this.page.getByPlaceholder('Range Picker')
        await calenderInputField.click()
        const dateToAssertStart = await this.selectDateInTheCalender(startDayFromToday)
        const dateToAssertEnd = await this.selectDateInTheCalender(endDayFromToday)
        const dateToAssert = `${dateToAssertStart} - ${dateToAssertEnd}`
        await expect(calenderInputField).toHaveValue(dateToAssert)
    }

    private async selectDateInTheCalender(numberOfDaysFromToday: number){
        let date = new Date()
        date.setDate(date.getDate() + numberOfDaysFromToday)
        const expectedDate = date.getDate().toString()
        const expectedMonthShort = date.toLocaleString('En-US', {month: 'short'})
        const expectedMonthLong = date.toLocaleString('En-US', {month: 'long'})
        const expectedYear = date.getFullYear()
        const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`

        let calenderMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent()
        const expectedMonthAndYear = `${expectedMonthLong} ${expectedYear}`
                                                
        while(!calenderMonthAndYear.includes(expectedMonthAndYear)){
            await this.page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click()
            calenderMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent()
        }

        await this.page.locator('.day-cell.ng-star-inserted').getByText(expectedDate, {exact: true}).click()
        return dateToAssert
    }

}