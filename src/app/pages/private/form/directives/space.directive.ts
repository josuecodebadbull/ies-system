import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomerValidators {
    static spaceValidation(
        control: AbstractControl
    ): ValidationErrors | null {
        const isWhitespace = (control.value || '').trim().length === (control.value || '').length;
        return isWhitespace ? null : { 'whitespace': true };
    }
}