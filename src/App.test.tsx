import { describe, it, expect } from 'vitest';
import App from './App';
import { render, screen } from './test/test-utils';

describe('Simple working test', ()=>{
    it('The title is visible', ()=>{
        render(<App/>);
        // expect(screen.getByText(/Worlde/i)).toBeInTheDocument;
        // @ts-expect-error
        expect(screen.getByText(/Worlde/i)).toBeInTheDocument();
    })
})