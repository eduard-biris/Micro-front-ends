import { CalendarType } from 'types/visualizations';
// eslint-disable-next-line import/no-cycle
import { evaluateCondition } from './generic';

export const calendarWords = ['categories', 'dates'];

const applyDatesFilter = (
  datesFilter: string,
  defaultData: {
    categories: string[];
    calendar: CalendarType[];
  }
) => {
  try {
    let datesOperations: string[] = [];
    const matchesValues = datesFilter.match(/dates\s*([><=!]*)\s*(['"]?)(\d{4}-\d{2}-\d{2})\2/g);

    if (matchesValues) {
      datesOperations = matchesValues.map((match) => {
        const matchResult = match.match(/dates\s*([><=!]*)\s*(['"]?)(\d{4}-\d{2}-\d{2})\2/);

        if (matchResult) {
          const [, operator, , values] = matchResult;
          const filterValue = (values as string).trim();
          return `${operator}${filterValue}`;
        }
        return '';
      });
    }

    const filteredValues = defaultData.calendar
      .filter((calendar) => {
        if (datesOperations.length > 0) {
          return datesOperations
            .every((condition) => evaluateCondition(calendar.date, condition, true));
        }
        return true;
      });

    return filteredValues;
  } catch (error) {
    return defaultData.calendar;
  }
};

const applyCategoriesFilter = (categoriesFilter: string, defaultData: {
    categories: string[];
    calendar: CalendarType[];
  }): string[] => {
  const includedCategories: string[] = [];
  const excludedCategories: string[] = [];

  try {
    if (categoriesFilter === '') {
      throw Error('No categoriesFilter');
    }
    const matches = categoriesFilter.match(/categories\s*([!=]+)\s*\[([^\]]+)\]/g);

    if (matches) {
      matches.forEach((match) => {
        const matchResult = match.match(/categories\s*([!=]+)\s*\[([^\]]+)\]/);
        if (matchResult) {
          const [, operator, values] = matchResult;
          const filterCategories = (values as string)
            .replace(/'/g, '')
            .split(/\s*,\s*/)
            .filter(Boolean);
          if (operator === '=') {
            includedCategories.push(...filterCategories);
          } else if (operator === '!=') {
            excludedCategories.push(...filterCategories);
          }
        }
      });
      const filteredCategories = defaultData.categories.filter(
        (cat) => (includedCategories.length && includedCategories.includes(cat))
          || (excludedCategories.length && !excludedCategories.includes(cat))
      );
      return filteredCategories;
    }
  } catch (error) {
    return defaultData.categories;
  }
  return [];
};

export const applyCalendarFilter = (expressions:string[], defaultData: {
    categories: string[];
    calendar: CalendarType[];
  }) => {
  const newData:{
    categories: string[];
    calendar: CalendarType[];
  } = {
    categories: [],
    calendar: []
  };
  let categoriesFilter: string = '';
  let datesFilter: string = '';
  expressions.forEach((expression, index) => {
    const hasCategories = expression.includes('categories');
    const hasDatesFilter = expression.includes('dates');
    if (hasDatesFilter) {
      if (index === 0) {
        datesFilter = expression;
      } else {
        datesFilter = `${datesFilter}&&${expression}`;
      }
    }
    if (hasCategories) {
      if (index === 0) {
        categoriesFilter = expression;
      } else {
        categoriesFilter = `${categoriesFilter}&&${expression}`;
      }
    }
  });
  if (categoriesFilter !== '') {
    newData.categories = applyCategoriesFilter(categoriesFilter, defaultData);
  }
  if (datesFilter !== '') {
    newData.calendar = applyDatesFilter(
      datesFilter,
      defaultData
    );
  }
  return newData;
};
