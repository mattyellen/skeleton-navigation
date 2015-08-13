import {PageObject_Welcome} from './welcome.po.js';
import {PageObject_Skeleton} from './skeleton.po.js';

describe('aurelia skeleton app', function() {
  var po_welcome,
      po_skeleton;

  beforeEach( () => {
    po_skeleton = new PageObject_Skeleton();
    po_welcome = new PageObject_Welcome();

    console.log("load - 2");
    browser.loadAndWaitForAureliaPage("http://localhost:9000/#/users");
  });

  it('should navigate to users page', () => {
    expect(po_skeleton.getCurrentPageTitle()).toBe('Github Users | Aurelia');
  });
});
