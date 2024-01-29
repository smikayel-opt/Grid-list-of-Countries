import { ResultCardComponent } from './result-card.component';
import { Theme } from '../../servicies/theme/theme.service';
import { mockThemeService } from '../../servicies/theme/theme.service.mock';

describe('ResultCardComponent', () => {
  let component: ResultCardComponent;

  beforeEach(() => {
    component = new ResultCardComponent(mockThemeService());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
