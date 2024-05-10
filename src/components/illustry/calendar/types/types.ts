interface with_optional_properties {
    properties?: object | object[] | string;
}

export interface CalendarType extends with_optional_properties {
    date: string;
    value: number;
    category: string;
}