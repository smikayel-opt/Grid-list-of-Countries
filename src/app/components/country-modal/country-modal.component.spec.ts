import { CountryModalComponent } from './country-modal.component';

describe('CountryModalComponent', () => {
  let component: CountryModalComponent;

  beforeEach(() => {
    component = new CountryModalComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('handleOnClose', () => {
    it('should emit the onClose event', () => {
      spyOn(component.onClose, 'emit');
      component.handleOnClose();
      expect(component.onClose.emit).toHaveBeenCalled();
    });
  });
});
