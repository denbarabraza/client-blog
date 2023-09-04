import Categories from '@/components/Categories';
import { ICategories } from '@/components/Categories/interface';
import { LocaleValueEnum } from '@/constants/enums';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

const categoriesEn: ICategories = {
  categoriesTitle: 'Choose A Category',
  titleAlign: 'center',
  locale: LocaleValueEnum.En,
};

const categoriesRus: ICategories = {
  categoriesTitle: 'Выберите категорию',
  titleAlign: 'left',
  locale: LocaleValueEnum.Ru,
};

describe('Categories', () => {
  it('renders a Categories in english via vision variant', () => {
    render(<Categories {...categoriesEn} />);

    expect(screen.getByText(categoriesEn.categoriesTitle)).toBeInTheDocument();
    expect(screen.getByText('Business')).toBeInTheDocument();
    expect(screen.queryByText(categoriesEn.categoriesTitle)).toHaveStyle(
      'text-align:center',
    );
  });
  it('renders a Categories in russia via vision variant', () => {
    render(<Categories {...categoriesRus} />);

    expect(screen.getByText(categoriesRus.categoriesTitle)).toBeInTheDocument();
    expect(screen.getByText('Бизнес')).toBeInTheDocument();
    expect(screen.queryByText(categoriesRus.categoriesTitle)).toHaveStyle(
      'text-align:left',
    );
  });
});
