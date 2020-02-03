import { DireflowComponent } from 'direflow-component';
import App from './direflow-component/App';

const direflowComponent = new DireflowComponent();

direflowComponent.setProperties({
  sampleList: [
    'Create with React',
    'Build as Web Component',
    'Use it anywhere!',
  ],
});

direflowComponent.render(App, 'simple-like');
