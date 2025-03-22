import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [preferences, setPreferences] = useState(defaultArticleState);

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': preferences.fontFamilyOption.value,
					'--font-size': preferences.fontSizeOption.value,
					'--font-color': preferences.fontColor.value,
					'--container-width': preferences.contentWidth.value,
					'--bg-color': preferences.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm setPreferences={setPreferences} />
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
