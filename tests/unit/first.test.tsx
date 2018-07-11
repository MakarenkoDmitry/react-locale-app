import * as React from "react";
import { expect} from 'chai';
import "./template";
import {ReactWrapper, mount, shallow } from "enzyme";


import { App, LayoutProps } from "../../src/App";

describe('Component: App', function () {
    let wrapper: ReactWrapper<LayoutProps, undefined>;
    let DOMNode: Element;
    let massage: string = "Hello!";

    beforeEach(() => {
        wrapper = mount(<App massage={massage}/>);
        DOMNode = wrapper.getDOMNode()
    });

    afterEach(() => {
        wrapper.unmount();
    });

      it('test equals props render', function () {
          expect(DOMNode.innerHTML).equals(massage);
      });
});