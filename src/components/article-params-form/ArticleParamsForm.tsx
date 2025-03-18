import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import { Text } from 'src/ui/text';
import { fontFamilyOptions, OptionType } from 'src/constants/articleProps';
import { Select } from 'src/ui/select';

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handlerOpen = () => {
		setIsOpen(!isOpen);
	};

	const [selectedFontFamily, setSelectedFontFamily] = useState(
		fontFamilyOptions[0]
	);
	const handleFontFamilyChange = (option: OptionType) => {
		setSelectedFontFamily(option);
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={handlerOpen} />
			<aside
				className={`${styles.container} ${
					isOpen ? styles.container_open : ''
				}`}>
				<form className={styles.form}>
					<Text as='h2' size={31} weight={800} uppercase>
						задайте параметры
					</Text>
					<Select
						options={fontFamilyOptions}
						selected={selectedFontFamily}
						onChange={handleFontFamilyChange}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
