import { HierarchyNode } from 'types/visualizations';
// eslint-disable-next-line import/no-cycle
import { evaluateCondition } from './generic';

export const hierarchyWords = ['values', 'categories'];
export const applyValuesFilterRecursive = (
  node: HierarchyNode,
  valuesOperations: string[]
): HierarchyNode | undefined => {
  try {
    if (valuesOperations.length > 0) {
      const currentValue = node.value || 0;
      const filterResult = valuesOperations
        .every((condition) => evaluateCondition(currentValue, condition));

      if (!filterResult) {
        return undefined;
      }
    }

    const filteredChildren = (node.children || [])
      .map((child) => applyValuesFilterRecursive(child, valuesOperations))
      .filter((child) => child !== undefined) as HierarchyNode[];
    return {
      ...node,
      children: filteredChildren
    };
  } catch (error) {
    return undefined;
  }
};

export const applyValuesFilter = (
  valuesFilter: string,
  defaultData: {
      categories: string[];
      nodes: HierarchyNode[];
    }
): { categories: string[]; nodes: HierarchyNode[] } => {
  try {
    let valuesOperations: string[] = [];
    const matchesValues = valuesFilter.match(/values\s*([><=!]*)\s*(\d+)/g);

    if (matchesValues) {
      valuesOperations = matchesValues.map((match) => {
        const matchResult = match.match(/values\s*([><=!]*)\s*(\d+)/);
        if (matchResult) {
          const [, operator, values] = matchResult;
          const filterValue = parseInt((values as string).trim(), 10);
          return `${operator}${filterValue}`;
        }
        return '';
      });
    }

    const filteredValues = defaultData.nodes
      .map((node) => applyValuesFilterRecursive(node, valuesOperations))
      .filter((node) => node !== undefined) as HierarchyNode[];
    return { categories: defaultData.categories, nodes: filteredValues };
  } catch (error) {
    return defaultData;
  }
};
const applyCategoriesFilter = (categoriesFilter: string, defaultData: {
    categories: string[]
    nodes: HierarchyNode[]
    }): string[] => {
  const includedCategories: string[] = [];
  const excludedCategories: string[] = [];

  try {
    if (categoriesFilter === '') {
      throw Error('No CategoriesFilter');
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

export const applyHierachyFilter = (expressions:string[], defaultData: {
    categories: string[]
    nodes: HierarchyNode[]
    }) => {
  let newData: {
    categories: string[]
    nodes: HierarchyNode[]
    } = { nodes: [...defaultData.nodes], categories: [...defaultData.categories] };
  let valuesFilter: string = '';
  let categoriesFilter: string = '';
  expressions.forEach((expression, index) => {
    const hasValuesFilter = expression.includes('values');
    const hasCategoriesFilter = expression.includes('categories');
    if (hasValuesFilter) {
      if (index === 0) {
        valuesFilter = expression;
      } else {
        valuesFilter = `${valuesFilter}&&${expression}`;
      }
    }
    if (hasCategoriesFilter) {
      if (index === 0) {
        categoriesFilter = expression;
      } else {
        categoriesFilter = `${categoriesFilter}&&${expression}`;
      }
    }
  });

  if (valuesFilter !== '') {
    newData = applyValuesFilter(
      valuesFilter,
      newData
    );
  }
  if (categoriesFilter !== '') {
    newData.categories = applyCategoriesFilter(
      valuesFilter,
      newData
    );
  }
  return newData;
};
