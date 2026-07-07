import React, { useRef } from 'react'

const Scroll = () => {

  const homemove = useRef()
  const aboutssref = useRef()
  const proproref = useRef()
  const mainref = useRef()

  const handlehome = () => {
    homemove.current.scrollIntoView({
         behavior: "smooth"
         })
  }

  const handleab = () => {
    aboutssref.current.scrollIntoView({ 
        behavior: "smooth"
     })
  }

  const handlepro = () => {
    proproref.current.scrollIntoView({ 
        behavior: "smooth"
     })
  }

  const handlefile = () => {
    mainref.current.scrollIntoView({ 
        behavior: "smooth"
     })
  }

  const handletop = () => {
    window.scrollTo({
         top: 0,
         
         behavior: "smooth" 
        })
  }

  return (
    <div className="font-sans">

      {/* Navbar */}
      <div className="flex gap-4 p-4 bg-blue-500 text-white sticky top-0">
        <button onClick={handlehome} className="px-4 py-2 bg-blue-700 rounded">Home</button>
        <button onClick={handleab} className="px-4 py-2 bg-blue-700 rounded">About</button>
        <button onClick={handlepro} className="px-4 py-2 bg-blue-700 rounded">Project</button>
        <button onClick={handlefile} className="px-4 py-2 bg-blue-700 rounded">Profile</button>
      </div>

      {/* Sections */}
      <section ref={homemove} className="p-10 min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Home</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum voluptates, similique quibusdam ipsa eos quod tempora, provident soluta distinctio voluptas rem mollitia perferendis voluptatum libero in adipisci quae, non dolorum.
        Laboriosam deleniti rerum vitae labore minima corrupti cupiditate velit? Corrupti autem numquam harum. Aspernatur rerum sit adipisci, quo saepe illo alias dolor id nulla doloremque reprehenderit ratione quasi repudiandae exercitationem.
        Repellat, placeat, cumque aperiam laudantium dolorem necessitatibus, assumenda aliquid ducimus totam praesentium nostrum exercitationem vero excepturi. Facilis, voluptate, minima sunt quam fugit blanditiis dolorum reiciendis omnis nam aperiam vel provident?
        Doloribus, ratione? Ab, enim modi aperiam corporis facilis, libero quae ex itaque dolores nobis dignissimos vero aut numquam quo distinctio eligendi consectetur quos, ad similique accusantium laudantium voluptates odio. Distinctio!
        Voluptatem corrupti natus dolores corporis, soluta quod reprehenderit et non excepturi cupiditate minima hic libero, inventore eum optio impedit expedita nisi modi ipsa earum aliquam repellendus dicta error officiis? Numquam?
        Ipsa accusantium error minus autem, accusamus exercitationem odit aspernatur saepe quasi soluta hic vel laborum illum in non deleniti nihil nostrum blanditiis eum suscipit est! Ratione placeat aperiam molestias facilis!
        Fuga tempora provident non neque asperiores quibusdam nostrum itaque error blanditiis, laudantium maiores officia repudiandae voluptate minima, voluptatem quasi esse expedita ratione dolore deleniti? Ad dicta et eos libero ullam.
        Mollitia minus quo sit, ullam atque corrupti vitae nobis autem cupiditate dolorum, enim, quam recusandae aperiam dolor? Id voluptates fugiat nam aliquid. Pariatur at natus nobis fugit nemo culpa rem?
        Voluptas vel dicta recusandae quo, veritatis ex expedita amet asperiores rem laboriosam et tempora ab dolore itaque odit sit officiis impedit atque accusamus esse excepturi fugiat. Mollitia quod necessitatibus in.
        Sint enim nostrum, tempore suscipit sit eveniet iure ipsam a odit quidem amet quisquam placeat perspiciatis totam minus explicabo similique saepe maiores! Consectetur unde nihil facilis culpa temporibus officia molestiae.
        Perferendis dolorem veniam, nam magnam quos expedita quasi itaque dolor enim esse voluptate placeat accusamus sit accusantium mollitia libero rerum consequuntur dolore dolores aut nihil iure! Corporis voluptatibus quis aut?
        Recusandae corrupti necessitatibus asperiores fugiat laboriosam maxime, velit sed veniam consequatur nobis illum tempore voluptatem dicta natus quo, esse suscipit. In earum sapiente labore, itaque nobis sit! Quae, blanditiis cum?
        Consequuntur, provident odit voluptatem pariatur qui consequatur excepturi est totam quasi voluptatum delectus asperiores cumque libero sequi ratione assumenda cupiditate optio odio obcaecati quisquam nam sed modi. Numquam, possimus tempora.
        Laborum aspernatur quibusdam harum sequi aliquam eaque modi consectetur non! Iusto totam cumque, delectus possimus veniam nulla mollitia magnam! A facilis fugit, provident repudiandae vitae odit nulla officia neque laboriosam.
        Asperiores sed quibusdam sapiente repellendus cum aliquid explicabo neque excepturi at exercitationem. Error odit ipsum cum aperiam tempore ut, repudiandae quis, corporis adipisci accusantium totam vero dicta vitae, minima sint?
        Dicta ex vitae hic architecto omnis similique excepturi facilis veniam quaerat expedita. Recusandae nemo quia quisquam doloremque dicta ullam dolore blanditiis, aperiam, molestias dignissimos facere eaque, consequuntur similique numquam laboriosam.
        Laboriosam cum illo harum odio culpa veritatis delectus reiciendis aut quidem animi eveniet nesciunt rem repellendus voluptatibus, dolorem architecto quasi alias enim tenetur aperiam blanditiis aspernatur ullam possimus. Harum, corporis.
        Tempore, exercitationem expedita sint corporis aut odit voluptates ipsum explicabo nesciunt quis eligendi quisquam aliquid quaerat voluptas ducimus ea quo, non excepturi aperiam cupiditate deleniti incidunt quibusdam tenetur nemo? Nam.
        In eaque accusantium voluptatibus odio perferendis aspernatur harum, soluta nostrum eveniet neque facilis quibusdam laudantium, esse laborum cumque tenetur mollitia rem a. Non, doloribus placeat quia ex est incidunt iure.
        Odio tempora saepe molestiae quis ipsum culpa provident, neque tempore harum perspiciatis impedit animi dolorum beatae dicta magnam alias maiores velit facilis eius itaque dolore! Delectus nihil vel placeat tenetur?
        Tempora, nobis! Vero aperiam exercitationem natus earum nulla impedit reiciendis, laborum quia repellendus in praesentium cupiditate officia consectetur, quod amet similique ab, ipsa architecto sequi dolorum voluptatibus possimus necessitatibus corrupti!
        Blanditiis repellendus non, totam tenetur quia maxime ab aliquam aliquid natus eius impedit omnis unde dignissimos culpa illum deleniti, molestiae reprehenderit optio ducimus? Quae id dignissimos repellat exercitationem pariatur distinctio.
        Dolor iusto nam exercitationem, temporibus repellat consectetur laudantium ipsa? Quibusdam quis reiciendis repudiandae illo aspernatur quas, quasi rem animi culpa aliquam nostrum ab iure! Magnam perferendis a soluta accusamus asperiores?
        Perferendis atque facere quis hic temporibus maiores quas similique iusto voluptatum, et voluptatem corrupti commodi in quo doloribus, aspernatur alias unde labore eius recusandae porro doloremque magni nihil? Error, impedit!
        A ut voluptates, reprehenderit explicabo deserunt repellat cumque tempore esse pariatur facere necessitatibus earum ratione fuga nostrum aut illum ducimus cupiditate doloremque maxime velit vitae! Rerum consequuntur neque beatae aliquam!
        Laborum provident consectetur earum illum cupiditate quisquam obcaecati quod quam. Quaerat fuga, ut illo quae veritatis iste, aperiam voluptate hic delectus, rem cum esse a. Ratione reiciendis quos earum culpa.
        Natus ex dolor maxime vel obcaecati reprehenderit. Unde laboriosam aut deleniti maxime itaque adipisci ratione nesciunt officia non. Numquam sint et exercitationem est nemo consectetur fuga alias. Dolores, eius illum?
        Eveniet assumenda laboriosam repellendus cupiditate velit itaque voluptatibus quod ullam dolores odit sapiente provident qui, perspiciatis sequi rem facilis aliquam aliquid iure nihil natus voluptatem molestiae. Eaque consequatur est voluptatibus.
        Numquam distinctio amet vero earum magnam? Consequatur, cumque explicabo. Aperiam illo repudiandae odit veniam, nulla porro excepturi labore id ut ipsum incidunt debitis inventore iure officiis quidem temporibus eveniet facere?
        Id iste optio tempora aperiam dicta! Vel asperiores mollitia enim dolorem culpa eius nostrum possimus incidunt assumenda. Aliquid veniam sapiente minima sint at voluptatibus soluta. Officiis iste quas saepe perspiciatis.</p>
      </section>

      <section ref={aboutssref} className="p-10 min-h-screen bg-gray-200">
        <h1 className="text-3xl font-bold mb-4">About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquid ut quidem optio maxime quas nobis facilis laboriosam consequatur exercitationem sed fugiat est ipsa quo, voluptates laudantium dolorem eius illo!
        Est hic vel possimus incidunt sed illum! Eum quidem amet in, tempore nemo porro repellendus praesentium iusto aliquid facilis ea quibusdam earum animi maiores commodi quia a mollitia eos iste.
        Recusandae in hic reprehenderit minus labore sint eius blanditiis fugit aperiam suscipit temporibus quas voluptatem quam dolores repellendus expedita, nobis placeat adipisci illum sed voluptatum atque ipsa? Suscipit, unde ea.
        Nesciunt id fugiat sit quis odit dolor earum repellendus necessitatibus voluptates ipsa, rerum totam vitae ullam tenetur rem nulla delectus aut. Totam, repellendus maxime. Modi, iusto mollitia. Numquam, quas architecto!
        Non eligendi velit quas doloribus unde voluptatibus mollitia fugit deserunt sint similique laborum animi minima illo illum esse, nobis, nam quos maxime nihil blanditiis sit natus iure. Incidunt, eveniet nihil!
        Necessitatibus aut corporis aliquid sint fuga nobis non, quibusdam repudiandae totam natus labore a facere eligendi cumque eos. Sit eligendi eum assumenda voluptates minus corrupti labore repudiandae officiis obcaecati? Sed?
        Earum harum saepe quasi suscipit, consequatur error, ipsam inventore rem adipisci facilis voluptate at nesciunt. Perspiciatis sapiente voluptate pariatur ipsa modi commodi quam magnam in qui repellendus. Modi, minus quod.
        Iste possimus vero illo blanditiis dicta ipsa voluptate reprehenderit, ut eos laboriosam deserunt expedita nisi aliquam, optio doloribus dignissimos obcaecati. Sint consectetur sed eius quo explicabo dicta sapiente dignissimos illo.
        Aliquam, illo ipsam laboriosam temporibus quo consectetur, non sunt dolor iusto dignissimos nulla? Quasi provident iste minima officia ullam aliquam, dolorem cum perferendis reiciendis expedita quas placeat magnam. Molestiae, vitae.
        Expedita, nihil illum. Enim sit corrupti voluptates et minus nam nisi labore placeat tempora maxime doloremque perferendis repellendus, at minima molestias explicabo nobis doloribus sunt distinctio quidem ad fugit dicta?
        Animi perspiciatis saepe error necessitatibus molestias distinctio incidunt obcaecati veritatis pariatur molestiae! Architecto fugit reiciendis accusamus non aliquid, placeat nostrum ea provident assumenda, omnis distinctio dicta incidunt molestiae? Eaque, aliquid?
        Error quia autem id adipisci numquam, minus blanditiis, asperiores magnam tempore harum nesciunt veritatis eaque nemo ratione voluptas dolorum illo veniam suscipit. Amet a, natus veniam dignissimos facere distinctio! Praesentium.
        Qui ea suscipit dolor fuga facilis! Laudantium unde doloribus consequatur ipsam ipsa adipisci corporis similique ad! Distinctio tempora amet quisquam corrupti commodi nobis, quo aperiam delectus, incidunt, fugiat exercitationem earum?
        Eligendi quod minima, obcaecati consequuntur architecto fugiat eius dolorum qui debitis sapiente quam amet temporibus, earum maiores neque? Quae ea aliquam quibusdam sit nemo laborum pariatur voluptate nulla! Eius, modi!
        Repudiandae dolor autem culpa tenetur exercitationem neque vero, cupiditate quae illum, cum natus non eligendi inventore corporis voluptates vitae doloribus veritatis minus? Autem eos nemo beatae cupiditate maiores adipisci commodi.
        Aut amet dolor ab quo distinctio velit inventore obcaecati. Iure quam labore at animi, necessitatibus reprehenderit magni accusantium aperiam dolorem nihil perspiciatis amet ab voluptatum unde aliquam eius mollitia error.
        Iusto, quam commodi consectetur quos necessitatibus est pariatur quae provident officia quis molestias nobis omnis unde hic distinctio error ad aliquid, quo dolorum facilis dignissimos rerum blanditiis architecto. Architecto, porro.
        Tenetur quibusdam provident ea impedit saepe, facere sit quaerat dignissimos, quo incidunt corporis natus commodi ipsa tempore quos quis odio rem sed quae! Omnis optio repudiandae sit expedita soluta atque!
        Aut nostrum voluptatum nobis id possimus ex fugiat excepturi placeat quo hic itaque voluptates mollitia ipsa voluptas illum fuga sunt, odit error rerum animi corrupti assumenda aliquid nihil. Laborum, voluptates.
        Asperiores vel, placeat dolores voluptatem culpa fugit optio magni quis iusto atque illum ipsam dolore veniam sed inventore soluta provident consequatur, ea quae porro, animi rem fugiat nostrum repellendus. Vitae.
        Officiis iusto necessitatibus earum odit nesciunt labore veniam, esse temporibus velit! Maiores architecto aut, explicabo obcaecati ipsam culpa cum quisquam in dolores animi! Suscipit, harum perspiciatis eligendi labore sint iste.
        Et quidem id rem expedita, neque repellat sunt sequi officia? Consequuntur nesciunt nostrum, consectetur reprehenderit officiis ex. At, culpa dolores. Iure repellendus natus atque molestias modi accusantium magnam deserunt nam.
        Quasi eligendi iste incidunt deleniti eum voluptatum nostrum alias cupiditate illum obcaecati. Officia, reprehenderit sit porro id non temporibus ut ipsa perspiciatis voluptate, molestias animi inventore ducimus sapiente suscipit voluptates.
        Aperiam molestias tenetur dolor numquam, at exercitationem explicabo esse minima? Eum facere quod temporibus doloribus optio dolorem in ipsum amet neque nobis maxime obcaecati, iusto omnis voluptatibus saepe voluptatum unde.
        Maiores laboriosam unde minus aliquid nesciunt ea tempore, dolor aperiam. Aliquam omnis cumque autem corporis dicta maxime obcaecati libero, nemo tempore quas distinctio dolores cupiditate earum totam dignissimos veritatis aliquid.
        Praesentium qui placeat magni deleniti ab accusantium, ad quibusdam sequi dolor nesciunt molestiae neque veritatis necessitatibus provident aspernatur consequatur, enim saepe? Eveniet laborum distinctio aliquam veritatis magni placeat modi. Voluptatibus!
        Similique porro sapiente a fugit incidunt optio minus fuga ipsam amet. Numquam inventore ipsam saepe, quas adipisci eos reiciendis dolorum ut corporis. Esse saepe provident blanditiis, labore magni rem assumenda?
        Harum laudantium voluptatum vero laboriosam totam dolor odit enim incidunt, ut mollitia in unde at ipsam facere! Iste inventore sed dignissimos atque beatae esse tempora minus, harum illo unde nostrum.
        Delectus voluptates a id modi, dicta blanditiis veniam similique labore at commodi doloremque quidem distinctio aliquam necessitatibus, ut aut suscipit repellat doloribus fugit dolore quia harum. Exercitationem beatae architecto quae?
        Consectetur corporis sapiente obcaecati, aliquid mollitia nulla officia et natus? Similique ex, repellat ut, rerum sed et ipsa aperiam quasi repellendus, veritatis architecto odit commodi fugiat magnam esse ad! Esse?</p>
      </section>

      <section ref={proproref} className="p-10 min-h-screen bg-gray-300">
        <h1 className="text-3xl font-bold mb-4">Project</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos cum ipsa excepturi hic laudantium quidem nihil laborum, officia facere mollitia quaerat soluta voluptatum obcaecati voluptatibus dolores esse molestiae iure eaque?
        Vero aliquid sunt, ipsam exercitationem unde modi sint accusamus recusandae in atque culpa odio nisi! Velit doloremque facilis ex explicabo sit, earum ullam aperiam itaque voluptate atque vitae minus enim.
        Maxime officiis doloribus quis laboriosam repudiandae deserunt enim molestias tempora, harum expedita asperiores quibusdam deleniti ad porro odio cupiditate laborum illum nemo, provident dicta mollitia! Id consectetur nesciunt error eum!
        Similique, possimus. Ea maxime quo eveniet doloremque dignissimos autem accusantium error nobis sed! Quidem quasi quos numquam sed! Ad nulla numquam sequi aliquid assumenda dolor hic mollitia culpa iste facilis.
        Doloremque placeat tempora aspernatur natus hic perspiciatis culpa reiciendis minima, ratione quos quisquam nemo delectus ut, numquam omnis quia, eligendi sequi aperiam illo quae repellat nulla. Atque iste officiis dolore!
        Deleniti ipsam reiciendis ipsa consequuntur ad doloribus nesciunt fugit molestias natus illo, nihil id culpa dicta labore voluptate ut assumenda vitae eaque ex iusto deserunt, excepturi voluptatum. Nihil, alias neque!
        Rem cum iste nam, eveniet dicta suscipit eum? Assumenda in sapiente dolorum. Nisi fugit, cupiditate provident nemo blanditiis similique et minima quis reprehenderit voluptas perspiciatis deserunt voluptatum ullam maiores fugiat?
        Nemo necessitatibus perferendis optio quis officiis ipsam veritatis quod! Autem sit dolore fugiat nihil deserunt adipisci at doloribus illum praesentium! Quod aut similique hic voluptatibus, possimus vero provident quibusdam sunt.
        Ea laudantium ducimus blanditiis ipsam incidunt a expedita excepturi molestiae. Suscipit earum tempora non provident ea fuga nulla quidem, maxime neque. Corrupti minima voluptatem a magni nihil, sequi cumque earum.
        Illo, officia sit nam placeat fuga adipisci, ratione, illum unde voluptates sint quas provident debitis ipsum tempora quia accusantium nesciunt ab? Dolores iure eos consectetur, doloremque iusto nihil dignissimos error!
        Fugiat est eligendi recusandae voluptates, eum corporis, numquam reiciendis aperiam praesentium iusto et odit rem consequatur repellat! Deserunt, blanditiis. Cum, vitae ipsam! Architecto corporis minima asperiores, nulla quo deserunt obcaecati.
        Alias nisi obcaecati laborum quaerat blanditiis quasi dignissimos, dolore numquam id eveniet qui itaque et doloribus iste dolor eligendi cum odit hic esse consequuntur sed saepe tempore repellendus laudantium. Maiores?
        Quasi quas beatae saepe aliquid quaerat, nulla et officia. Esse rem ullam sequi perferendis? Libero ratione quas est aspernatur ducimus, ad impedit corporis provident molestias fugit ex molestiae blanditiis enim.
        Quasi nesciunt iure dolorum doloremque facilis obcaecati placeat dicta fugit? Sequi esse exercitationem, nisi culpa, fugit quia nulla doloremque ea odio debitis obcaecati molestiae labore perspiciatis consequatur cupiditate quisquam voluptatem!
        Similique nulla architecto corrupti eligendi ullam unde rem eveniet nesciunt ex quis tenetur soluta nihil blanditiis, voluptas voluptatum impedit ea fugiat, consequuntur, harum reprehenderit pariatur animi veritatis quaerat totam. Iusto.
        Nam labore id, blanditiis maiores distinctio quisquam reprehenderit cupiditate ullam sunt facilis quibusdam? Quam animi nisi rem ad quas dolor placeat dolorum pariatur, incidunt molestiae in itaque necessitatibus repudiandae ab?
        Recusandae impedit, doloremque dignissimos mollitia ad totam dolor, voluptates, beatae consequuntur ut nam excepturi cumque delectus natus eius perspiciatis animi quas iure dolorem modi cum? Iste placeat maxime libero minima.
        Laborum fugiat deserunt sit quia laboriosam veritatis at nisi illum ab doloribus ullam recusandae maiores ducimus consectetur, quas repellendus maxime exercitationem in repellat. Excepturi, labore nisi magni ipsum expedita ipsam.
        Repellendus ex quaerat veniam maxime incidunt assumenda rem, dolores, fugiat dolore sapiente excepturi, labore iure distinctio reiciendis pariatur id! Dolorem quam fuga corrupti sint est cum esse velit, consequuntur animi!
        Alias est enim molestiae distinctio labore rerum quos, deserunt porro, repellat esse aliquid! Explicabo qui natus maxime nulla atque architecto quibusdam. Cumque odio nihil quibusdam aut possimus reiciendis veritatis ex.
        Iusto eos sed eaque quidem, suscipit praesentium sequi alias aliquid repellat beatae maiores pariatur debitis. Soluta, praesentium. Excepturi temporibus fuga voluptatibus repellat modi labore? Tenetur dignissimos doloremque alias voluptatum. Veniam!
        Consectetur ad dolorum distinctio. Natus eligendi excepturi quaerat sed maxime impedit tempore odit ex, nulla tenetur molestias, omnis magnam nostrum praesentium doloribus illum nobis rerum, alias consequuntur ab porro fuga!
        Dignissimos atque laborum esse aliquam in consequatur maxime culpa fuga ut! Error provident vitae facere repellendus animi repellat deserunt a expedita. Atque nobis praesentium voluptatem porro fugiat repellendus error sint?
        Earum impedit consequuntur hic ipsum nemo nihil dicta officiis nam distinctio, cum, dolor quae voluptate voluptatem? Sequi, cumque incidunt. Ratione quam eos est culpa sequi, vero ea vitae facilis optio!
        At, eum soluta pariatur obcaecati labore recusandae dicta excepturi, illo impedit vel earum dolores est quos exercitationem corporis ipsa perferendis aliquid! Cum, veniam? In quas error maxime dolorum ullam id!
        Neque amet recusandae, praesentium quaerat eligendi natus debitis obcaecati architecto possimus nulla maxime a ab enim quibusdam, quisquam ad quam, voluptatem hic pariatur. Doloribus quidem, temporibus iste laboriosam labore et.
        Laudantium praesentium animi eum deleniti labore totam recusandae, ut dolor alias eveniet? Odio, ipsum sequi. Tempora perspiciatis incidunt vero odio exercitationem minima dignissimos repellat veniam dolorum sunt. Expedita, accusantium tempore!
        Consequuntur nisi laudantium, facilis ad placeat aut esse necessitatibus tempore. Tempore aliquam corrupti veritatis quos sed eaque sit accusantium, vel cum, perferendis, eius facilis non repellat quam qui consequuntur veniam?
        Reiciendis ullam illo facere repellendus harum perferendis saepe qui quos vero ab quidem consequatur consequuntur officia laboriosam, nobis sapiente ad corrupti facilis aut excepturi voluptatum ipsum? Animi quisquam dolorem totam?
        Dolore delectus ut voluptas possimus, sed amet aut consequuntur sequi repellendus odit explicabo id, praesentium incidunt quis perspiciatis voluptate ex eveniet error rem. Ducimus non iste rem magni possimus voluptate!</p>
      </section>

      <section ref={mainref} className="p-10 min-h-screen bg-gray-400">
        <h1 className="text-3xl font-bold mb-4">Profile</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur, repellat necessitatibus incidunt ipsa nihil aspernatur odit, corrupti reprehenderit repudiandae accusamus! Odio praesentium similique reiciendis a esse quaerat quod ipsa.
        Reprehenderit fugit earum magnam placeat dolor voluptatem voluptatibus incidunt hic sed a, recusandae quae atque, nobis quia dignissimos quibusdam vero voluptates fugiat quod! Doloribus, nam minus cumque cum porro amet.
        Tenetur quasi velit natus rerum deserunt enim iusto placeat. Necessitatibus, accusamus facilis aliquam nesciunt consequatur dolorum! Nulla, libero? Eos minus corporis ducimus quo aliquid ipsa commodi quia voluptatibus laboriosam voluptas.
        Reprehenderit porro et iure mollitia eius sint repellendus, magnam, assumenda delectus quos ipsam obcaecati minima aspernatur eveniet cum voluptatum? Minus ullam deleniti exercitationem sint aspernatur, veniam at ipsa inventore dolorum.
        Perferendis reprehenderit architecto at dicta facilis cupiditate saepe provident sequi, porro ratione dolorem aliquid fuga aspernatur molestias omnis dolores maxime? Id omnis ipsam aliquam voluptatem molestiae aperiam repellendus quo veritatis?
        Voluptatum recusandae similique iste animi alias fugit delectus repellat. Atque sed pariatur impedit aliquam voluptatum magnam esse aliquid quos ullam, quia facilis nostrum labore! Dolores perferendis eum accusamus minima est?
        Maxime, possimus? Distinctio earum error ratione rem magni omnis cupiditate quos corporis asperiores repellat! Non ex quos pariatur illo quibusdam. Placeat consequatur quia ipsum quidem blanditiis fugit eum, repellendus architecto?
        Assumenda sit, ex similique ad recusandae mollitia, ipsam saepe eos praesentium maxime aspernatur, iste ipsa! Commodi est explicabo nobis, animi magnam dignissimos sunt unde neque eius adipisci hic voluptatibus debitis.
        Debitis in laudantium temporibus cum deserunt suscipit, similique, beatae fugiat quae et excepturi? Impedit, amet! Error consectetur corrupti ducimus! Libero, doloribus. Porro maxime quisquam quasi nihil itaque possimus. Itaque, doloribus.
        Nisi aspernatur vel eaque illo, animi nesciunt fugit itaque praesentium. Obcaecati ab voluptas, nulla suscipit, maxime deleniti officia rerum ipsam quisquam soluta unde iusto iste minus sunt qui praesentium voluptates.
        Dolor, ipsa vero cumque repudiandae quis esse obcaecati fugiat praesentium facere qui repellat! Officia voluptatem quisquam amet labore dicta sint, nemo praesentium provident natus architecto corrupti doloribus aliquid, accusamus ipsum.
        Ea, repellendus officia consectetur a, nam expedita minus accusamus id, inventore atque aliquam nesciunt hic exercitationem. Ipsa ipsum, repellendus dolor earum doloribus, architecto quia itaque assumenda iste est modi tenetur.
        Assumenda dignissimos incidunt quae, eius voluptatibus minima atque molestias dicta! Doloribus, magni. Quia quam impedit praesentium est architecto deleniti laboriosam sapiente nihil! Esse voluptatibus et dolorum, tempore laudantium debitis explicabo.
        Magni, nisi? Odit qui quos ea in omnis, veritatis at itaque ipsa incidunt iure, quas, ullam iste aut assumenda quae! Eveniet nobis voluptatibus quae odit repellendus provident atque ullam quam.
        Molestias, veritatis maiores consectetur nam neque assumenda deleniti commodi numquam dolor consequuntur quos officiis mollitia rem libero voluptatem odio necessitatibus vero error repudiandae tenetur vitae. Veritatis pariatur nulla dicta ab.
        Aliquam recusandae culpa ducimus ut inventore libero sint alias quaerat rem delectus nemo dolorum quo provident nisi, odio doloribus voluptatibus commodi? Autem molestias porro iusto, sunt adipisci voluptates sint rem.
        Aliquam nisi accusantium cumque quis molestias, officiis numquam deserunt vel maiores unde quibusdam quisquam temporibus itaque nam culpa? Itaque voluptate nemo reiciendis qui, non minima quos perferendis ipsa iusto sed!
        Porro minima reiciendis neque quam dolorem asperiores numquam veniam? Odio a recusandae pariatur quas officia blanditiis beatae enim, adipisci expedita ab fugiat repellat omnis magnam earum optio veniam accusamus dicta.
        Totam culpa aperiam adipisci animi explicabo? Cumque ducimus, iusto dolor laborum qui repudiandae debitis culpa in nobis beatae error magnam ipsa quidem excepturi at ratione fugit, nulla blanditiis id consequuntur.
        Sint, mollitia, similique, ipsum alias architecto numquam vitae quam dicta nam dolorum officia minus! Eaque ipsum necessitatibus vel vero explicabo iure cupiditate, ut aspernatur ducimus quod quis vitae dicta distinctio.
        Voluptatibus soluta magnam harum id vel aspernatur? Maxime distinctio natus, nostrum laboriosam aliquam expedita id, obcaecati earum vel, quidem explicabo fugiat! Quas, iusto. Voluptatem dolor, dolorum labore accusantium alias facere.
        Iusto similique, culpa odit dolore blanditiis illum aliquam mollitia a. Quasi cum rem harum, adipisci perferendis impedit molestias quod recusandae temporibus placeat, eos dignissimos dolores dolor veniam debitis quidem distinctio.
        Voluptate, nemo laborum earum repellat odio deserunt accusantium ipsum blanditiis, maxime quam itaque sint quisquam repellendus nam eius placeat ex corporis. Possimus tempore quae recusandae veritatis quasi impedit laudantium voluptatem.
        Adipisci optio et minus exercitationem, modi earum fugiat fugit officia praesentium provident similique. Libero optio, quos, temporibus illum aliquid neque, rem consectetur blanditiis vero provident beatae nulla aut! Qui, accusantium!
        Ducimus similique distinctio illum facilis, eius ut nemo placeat, id quod quae aspernatur deserunt debitis, dolor aut labore assumenda voluptatum? Similique pariatur reiciendis corporis tenetur impedit molestias aliquid beatae quae!
        Amet eveniet totam ratione placeat architecto nostrum quas quos odio recusandae! Dignissimos porro quisquam hic ad molestiae consequuntur ipsam quod, placeat voluptatibus labore repellat ex laborum voluptate debitis doloremque voluptates.
        Architecto debitis ducimus veniam ab voluptas? Ipsam voluptates illum possimus esse similique illo nisi vero nulla earum? Possimus exercitationem reprehenderit repudiandae eaque, dolor quis alias dignissimos id iure similique odit!
        Ipsum deserunt beatae porro eum architecto incidunt, ducimus assumenda explicabo quos deleniti. Eaque neque obcaecati minima quo non accusantium voluptatum illo impedit deleniti nisi? Beatae ipsam qui commodi cum porro.
        Pariatur tempore minus nostrum ullam nobis, molestias architecto sapiente labore rerum, doloribus esse quo illo hic! Delectus, vitae, pariatur doloremque ipsum, et magnam saepe rem aliquam dolore accusantium nobis harum!
        Aliquid nobis qui eligendi tempora porro dicta non. Assumenda itaque quis esse eos harum odit, repellat eveniet voluptas laudantium optio commodi, nesciunt dolores necessitatibus debitis corrupti animi veritatis at ex.</p>
      </section>

      {/* Scroll to Top */}
      <div className="flex justify-center p-5">
        <button 
          onClick={handletop} 
          className="px-6 py-2 bg-black text-white rounded"
        >
          Move To Top
        </button>
      </div>

    </div>
  )
}

export default Scroll