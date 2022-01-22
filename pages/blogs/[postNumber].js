import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const id = router.query.postNumber;

  return (
    // <div className="h-screen">
    //   <div className="h-1/6">
    //     <div className="pl-[30px] pt-[30px]">
    //       <Link passHref={true} href="/user/history">
    //         <a>
    //           <div></div>
    //           <Image src="/arrow.png" width={149} height={46} alt="" />
    //         </a>
    //       </Link>
    //     </div>

    //     <div className="w-screen flex flex-col justify-center items-center">
    //       <h1 className="font-bold font-raleway text-[#432C81] text-[60px] mt-[40px]">
    //         Blog Title
    //       </h1>
    //       <h1 className="font-bold font-raleway text-[30px] mb-[40px]">
    //         By CoolDoctor
    //       </h1>
    //     </div>

    //     <div className="h-5/6 w-4/6 flex flex-col justify-center items-center border-[5px] border-solid border-[#000000]"></div>
    //   </div>
    // </div>

    <div className="h-screen">
      <div className="h-1/6">
        <div className="m-[60px]">
          <h1 className="font-raleway text-[60px] font-bold text-[#432C81]">
            Blogs
          </h1>
        </div>
      </div>
      <div className="flex h-4/6 p-[40px] overflow-y-scroll">
        <h1 className="font-raleway text-[18px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          voluptatibus enim ipsum, nisi voluptate praesentium quaerat
          voluptatum! Ea, eligendi amet recusandae fuga voluptas aut fugit illo
          tenetur culpa laudantium. Fugiat corporis culpa velit rerum ad
          molestias beatae tempora debitis ut sit blanditiis laudantium
          veritatis eaque dolore assumenda officia accusantium quas officiis
          aliquid, quae natus cumque? Nesciunt laborum illo reiciendis rem
          officiis! Sed reiciendis temporibus libero pariatur sint culpa
          suscipit eligendi aperiam numquam, dolorem dolorum omnis earum,
          tenetur, eius possimus facilis praesentium magnam fuga velit enim iste
          saepe voluptates! Error labore ullam distinctio quae excepturi
          molestiae neque quam vitae hic perferendis maiores, voluptate minima
          animi sapiente velit enim deleniti, reprehenderit quibusdam
          consectetur repellendus molestias nemo quia. Aut maxime sapiente
          distinctio, commodi explicabo molestias eius. Earum dolorem, nesciunt
          facilis animi quia repudiandae nam, ratione debitis magnam veritatis
          culpa, repellendus doloribus praesentium ducimus temporibus deserunt
          nobis? Praesentium laudantium laborum obcaecati animi aliquam
          corrupti, quo veniam rem, quae atque eum reiciendis exercitationem?
          Officia, ea corrupti reiciendis quos voluptatum delectus aspernatur
          harum assumenda porro nulla explicabo quam temporibus et. Impedit rem
          assumenda nobis corrupti nihil? Quia adipisci obcaecati sapiente
          tempore repudiandae. Doloribus dignissimos cum vel! Suscipit, earum
          itaque corporis error eligendi atque dolorum, laborum culpa sequi
          officiis soluta voluptate deserunt hic voluptatum! Alias debitis est
          numquam vel quaerat aliquam maxime minima sit recusandae perferendis
          praesentium eos, totam temporibus, libero deleniti incidunt pariatur
          modi doloremque deserunt eius molestias iusto minus quasi. Veniam,
          modi rem libero accusantium est dolores voluptates tempore quae
          assumenda laboriosam alias at optio asperiores dolore cupiditate eum,
          nam eos possimus animi iusto perferendis dolorum odio architecto.
          Laboriosam aspernatur voluptas ullam! Aspernatur voluptates
          necessitatibus magnam ratione soluta asperiores quam harum corporis
          nihil nostrum. Corporis, quo aliquid inventore quia labore, esse,
          mollitia ea eligendi dolor delectus dolore ut cum magni facere quis
          hic blanditiis maxime beatae earum. Unde autem eaque voluptas
          reiciendis, accusamus, debitis maiores consectetur in distinctio,
          veritatis aspernatur harum corrupti doloremque earum rem aperiam sint?
          Voluptatem temporibus omnis nihil illo quod recusandae doloribus
          reprehenderit sapiente. Facere maxime blanditiis itaque fugit enim a
          commodi illum ab sapiente corrupti facilis iure dignissimos aliquam
          voluptatem excepturi quam dolorum, libero dolores ratione, magni at
          impedit. Sequi culpa recusandae dolore, quod non doloremque eum
          maiores assumenda voluptas quaerat eius atque, vel suscipit voluptates
          tempore beatae aut perspiciatis incidunt fugiat accusantium. Doloribus
          illo sapiente voluptates tempora officia corrupti voluptatibus
          molestiae natus quam a. Consectetur, perspiciatis possimus perferendis
          iusto blanditiis reiciendis, velit voluptatum repudiandae ipsa,
          debitis voluptas maxime dolor nesciunt iure? Quibusdam officiis
          doloribus autem excepturi? Quisquam dignissimos obcaecati repellat
          laborum asperiores voluptate odio dolores totam in modi eveniet iste
          ut ullam, doloremque id, sit ad atque excepturi! Sit modi qui ea
          vitae, nobis dicta perspiciatis provident vero corrupti blanditiis
          omnis hic nemo doloribus ad ex eos ab expedita optio explicabo,
          deserunt ipsam, tenetur sunt error. Quisquam, illum? Exercitationem
          reiciendis repellat esse sint quidem voluptate commodi autem
          cupiditate provident earum nesciunt, nulla doloribus distinctio
          incidunt ab quas veniam mollitia facere labore excepturi reprehenderit
          iste est fugit. At nobis aspernatur molestiae. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Aliquid aspernatur quaerat porro
          est dolor cumque, culpa libero explicabo aliquam laborum ipsa maiores
          exercitationem quidem ipsam recusandae itaque tempore ad optio
          voluptatibus natus in doloribus. Delectus impedit aperiam nulla enim
          perspiciatis dolores accusamus sapiente error quam tempore provident
          iusto, temporibus vel odio veniam architecto inventore omnis officiis,
          corrupti in exercitationem? Cum aspernatur dignissimos eos quasi quas
          possimus, nobis reprehenderit quibusdam nesciunt ea inventore dolorum
          voluptatem incidunt dolore. Veritatis nobis corporis reiciendis
          officiis aspernatur repudiandae, nesciunt, iure a suscipit repellendus
          in dolorem ipsam ut sit reprehenderit blanditiis, consequatur et at
          laudantium odio illum esse molestiae iste! Blanditiis illum, impedit
          ipsam porro culpa qui cum eaque id, sunt odit iusto mollitia libero!
          Architecto natus maiores beatae ea eos, dolore sequi qui molestiae
          quisquam quaerat? Nobis iusto sequi nemo, veniam ducimus similique
          reprehenderit ullam quidem vitae fugiat magnam dolorem sunt eligendi
          eveniet consequatur! Voluptatibus praesentium quos, voluptates ipsum
          nihil doloribus autem eius provident fugit accusamus suscipit iusto
          recusandae soluta rerum sit incidunt molestiae nobis, labore
          architecto quam id vel? Consequuntur numquam, quo blanditiis
          temporibus magni provident dolor quidem quis at neque recusandae
          veritatis similique quam nam et necessitatibus, atque nesciunt. A
          earum corporis asperiores? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Facilis, laborum? Explicabo, eligendi non blanditiis
          magnam omnis quae dolorum dolore qui, excepturi ducimus mollitia
          consequuntur nisi officiis facere iure eveniet! Doloribus cumque rem
          nihil facilis ducimus? Rerum reiciendis nobis totam dignissimos
          explicabo repudiandae eum neque vitae in. Dolorum explicabo quibusdam
          nesciunt tenetur dolores temporibus ad beatae hic maiores! Illum, est
          corporis nemo aliquam perspiciatis suscipit facilis quo dolores porro
          non, ducimus nihil consequuntur. Accusantium quisquam iure eos
          praesentium in rem consequatur saepe, dignissimos eveniet nobis
          blanditiis facilis perspiciatis quam harum repudiandae dolores magnam,
          a debitis iusto reprehenderit! Explicabo nisi accusantium a culpa
          totam quasi rerum. Magni ullam similique in voluptate molestias, dolor
          delectus exercitationem dolores dignissimos consequatur eligendi
          fugiat expedita nisi architecto iste ea! Aliquam maiores et est ipsam
          rem architecto nostrum iure sapiente, laboriosam dolores, debitis
          excepturi sit nobis aut quas doloribus. Labore tenetur consequuntur
          quasi distinctio cum dolorem qui voluptatum sapiente voluptates
          voluptatibus esse saepe omnis ab voluptate, quia officia ducimus
          porro. Porro aliquam veniam fugit consectetur quia expedita,
          cupiditate voluptatibus non, perferendis aut quisquam nobis rem iure
          corrupti illo voluptatum dolorum libero maiores doloremque quos
          explicabo in. Excepturi voluptate ullam iusto voluptatum tempora
          tenetur placeat dolorem hic earum deleniti possimus, numquam veniam
          sint harum minima fugiat necessitatibus itaque? Quasi in provident
          voluptatum quis accusamus consequuntur sunt eius, sed necessitatibus
          dignissimos porro neque distinctio eum aliquam praesentium. Suscipit
          odit necessitatibus molestiae eaque cum, vel magni ad nostrum, sed
          quibusdam deserunt obcaecati minus? Commodi placeat animi natus
          aperiam ipsum tempore. Minus laudantium, repellat tempora modi beatae
          cupiditate suscipit voluptate enim exercitationem totam aspernatur
          quasi similique architecto, magni nam qui officiis maxime dolor.
          Vitae, nesciunt repudiandae accusantium sint reiciendis iste ab magnam
          voluptatem possimus necessitatibus dignissimos fugit libero explicabo
          maiores nobis hic perferendis dolores velit qui fugiat laudantium
          cupiditate. Deleniti, consequatur animi. Consequatur, quibusdam nemo
          aspernatur aliquid, ipsa deleniti iure, alias saepe voluptatibus omnis
          earum officiis maxime ipsum voluptatem provident quam inventore
          sapiente excepturi dolor unde magni. Cum, numquam consectetur nobis
          recusandae cupiditate sapiente ducimus expedita officiis harum
          voluptatem dignissimos reprehenderit quas dolor modi impedit
          laboriosam illum quos eligendi atque quaerat! Aliquid rem fugit sed
          unde. Veritatis excepturi, provident quos reprehenderit neque ab
          aspernatur a odit! Perferendis voluptate qui, beatae fugiat officiis
          asperiores ipsam. Adipisci soluta ex sunt sed provident praesentium
          nemo qui eum eius, tempora, necessitatibus doloribus magni modi quas
          itaque illo ipsa. Dolores, incidunt ad reiciendis aperiam dignissimos
          debitis placeat, possimus assumenda vel voluptatibus nesciunt eaque
          et! Minima, quod. Culpa, laborum ut ipsam, perferendis vitae tenetur
          tempora corrupti dolorem error minima accusantium quibusdam dolores
          nostrum quas obcaecati rerum aut aperiam quos quia! Temporibus
          expedita repudiandae quos error quidem quam sed delectus,
          necessitatibus deleniti architecto culpa ipsa animi fuga at
          dignissimos dolore libero perspiciatis consequatur nobis dolorem?
          Nulla, pariatur quisquam, accusantium doloremque alias at quis vitae
          repellat perspiciatis voluptatibus et laboriosam, totam ex ullam
          dolorem repudiandae ipsum sed cupiditate inventore qui. Ipsum
          officiis, blanditiis nemo nisi reiciendis dignissimos, natus quisquam
          veniam aliquid sit, numquam sequi dolorem quam. Illo quod harum qui
          vero repellat! Possimus, minima quia. Numquam laborum deleniti enim
          iusto tempora quia tempore inventore ipsum consequuntur tenetur.
          Tenetur mollitia quasi perspiciatis voluptatibus vero, rerum placeat
          tempore aliquid animi expedita eum, repudiandae quaerat dolorem aut
          odit corrupti officia amet consequuntur ullam doloremque. Sapiente,
          quidem inventore? Quo nemo obcaecati ea modi repudiandae eos dolorem,
          nihil laboriosam eum corporis placeat minima explicabo perspiciatis
          maiores tempore nobis accusantium iusto animi odio optio quibusdam
          amet! Nihil illum et ducimus eum repellendus ipsum, modi doloremque,
          ab, explicabo quam consequatur ad ullam enim suscipit delectus labore?
          Aspernatur eos, maiores fuga adipisci illo nihil amet et culpa
          consequuntur incidunt totam voluptatem. Iusto dolorem quis odio
          veritatis porro velit quia ducimus id, doloremque eveniet magni. In ex
          tempora, recusandae quasi temporibus, ratione dolores corrupti sit
          eveniet magnam voluptatum deserunt iure aperiam itaque molestias
          architecto at. Voluptatum, atque exercitationem? Fugit sed omnis ad
          alias voluptatum cupiditate explicabo provident cumque harum deserunt
          ea iure error neque laboriosam quas hic inventore temporibus
          repellendus quia, ex ducimus quam beatae. Distinctio a aspernatur
          dolorem, cum tempore excepturi alias ea incidunt, facere inventore
          voluptates. Quos nesciunt vero sit quia sint ex ab nulla obcaecati,
          officia impedit maiores architecto odio nam quasi earum! Error culpa
          nisi, modi provident corporis impedit non amet autem molestias minus
          sapiente, quidem assumenda minima, quam iure labore dolor ipsum.
          Blanditiis in ad debitis neque, tenetur a ipsam odio quae assumenda
          consequatur aut laborum quo dolore cum enim quas soluta eius
          repudiandae repellat porro voluptate nulla amet quisquam? In
          voluptatum laboriosam eligendi dicta! Reiciendis eveniet delectus aut
          nesciunt necessitatibus, consequuntur minima, dolorem incidunt
          inventore eos quis! Quia, animi modi. Eum reprehenderit doloribus
          recusandae voluptas hic nostrum molestiae totam facilis aspernatur?
          Harum natus delectus enim sed eligendi voluptas! Magni molestias omnis
          harum, culpa consequuntur nam? Quos qui quam, sed est asperiores
          tempore dicta sint iste ad. Laudantium dolorem ipsum repudiandae
          libero esse cum iure optio maxime dolor officiis ipsam, temporibus
          error nihil animi quas sed ab consectetur eveniet! Earum cupiditate
          deserunt rerum necessitatibus ipsum aliquid modi magnam. Nostrum ipsa,
          quo adipisci impedit quaerat doloribus odio ipsum atque rem dolorem
          libero ut similique nobis ullam quibusdam, magni quasi laborum quos
          reprehenderit error asperiores voluptates accusantium! Dolore, itaque
          ducimus magni magnam aut beatae temporibus corrupti eaque deleniti?
          Saepe at eius similique error. Vero quaerat porro aut? Nostrum porro
          beatae ad dignissimos perferendis sint facere animi ut alias excepturi
          nulla, nesciunt eos culpa quaerat cum possimus doloribus tempore vero.
          Ut minus illo molestiae maiores ab cum, sed explicabo, laboriosam
          praesentium, quo nisi id blanditiis. Ipsum placeat eius culpa
          repellendus quasi ea doloremque sapiente officia molestias, earum
          doloribus inventore animi aut laboriosam ab quia libero et iste
          quisquam voluptatem. Doloremque, rerum quod. Rerum, blanditiis
          recusandae. Saepe maxime consequuntur aperiam, tenetur inventore
          quibusdam iste nulla rerum unde repellat culpa error exercitationem,
          perferendis dignissimos praesentium accusamus, enim officiis. Adipisci
          accusantium neque fugit illo ratione facere deleniti quae cumque
          consequatur doloribus aliquid et corporis dolorem reiciendis alias
          voluptas ipsa, consequuntur sapiente? Quasi debitis impedit
          reiciendis? Fugit repellendus optio commodi harum quo incidunt placeat
          aut quibusdam veniam, consequuntur facere at quaerat voluptatem
          adipisci possimus, odio deleniti non tempora ex doloremque hic culpa.
          Veniam praesentium inventore fuga quo deserunt repudiandae eligendi
          pariatur, quos fugiat ratione. Et ab a itaque dolorem voluptatem
          doloribus suscipit vel veritatis error officiis natus harum voluptas
          culpa deleniti tempore nemo maxime at, alias sunt molestiae illo sequi
          dolore? Inventore, reiciendis. Quisquam voluptas soluta, aut neque nam
          dolores voluptatum qui harum sequi veritatis fugit nostrum
          accusantium, doloribus numquam earum quam veniam ipsum quo. Labore,
          iusto exercitationem omnis aliquid repellat beatae sint ad! Quisquam
          possimus, quasi repellendus consequuntur quod omnis consequatur
          adipisci natus, dolore labore ratione vitae quas hic! Assumenda
          excepturi aperiam vel veritatis dolorem. Fugit quia error quidem neque
          quos sapiente doloribus voluptas consequuntur quod exercitationem?
          Explicabo aliquam modi temporibus ducimus rerum adipisci at assumenda
          iure, provident delectus enim quibusdam earum dignissimos culpa qui
          voluptate ipsam architecto hic, fugiat debitis vel, quisquam numquam!
          Accusantium tempore rerum hic, necessitatibus fugiat aliquid a
          repellendus eveniet quasi cupiditate possimus, asperiores facilis eos
          quis, corporis totam dolorem corrupti. Iusto nobis, cum eaque
          laudantium quod soluta minus, facere quidem, magnam illo libero
          voluptate repellendus suscipit deserunt porro sed voluptas tempora.
          Exercitationem, voluptate fuga quae magnam iste ea, velit quia
          pariatur, sunt corporis ipsum quo a architecto cum? Illo nulla
          consequuntur quae incidunt temporibus quis soluta atque aliquid,
          aliquam, rem nihil? Sed delectus blanditiis ab ea inventore atque.
          Laudantium maxime magnam voluptates officiis dolores, facilis
          dignissimos eos similique tempora suscipit ducimus velit dolorem nemo,
          dolore ipsum? Fugit iure quae dolore quos voluptatum tenetur optio
          maiores labore sit a numquam atque, cumque itaque in veniam nemo
          impedit, ab hic ipsa, dolores voluptatibus! Odit sint animi
          exercitationem, excepturi veniam totam, quod vitae optio unde velit
          impedit. Soluta a vitae labore quis dolore expedita impedit
          perspiciatis exercitationem quisquam dicta beatae incidunt hic
          voluptas corrupti, doloribus voluptatem nam error quidem fuga, odio,
          cumque facere possimus fugit. Vitae alias, maiores delectus doloribus
          et sapiente veniam neque vero nostrum dignissimos fuga cum enim
          laborum maxime ratione harum exercitationem inventore accusantium
          quidem. At facere odit accusantium ab error maxime nihil laborum
          repudiandae voluptatem, voluptas laudantium fugiat, in ratione, nulla
          delectus obcaecati? Quas, ad rem. Voluptate itaque minima, eveniet ea
          assumenda temporibus quis ducimus id magni iste eligendi.
          Necessitatibus odio autem repellendus officia iure recusandae amet
          voluptatem reiciendis eius quod eligendi ratione alias aut, doloribus,
          dicta porro consequuntur adipisci animi debitis ut commodi possimus.
          Molestias nulla earum consequuntur ipsa suscipit, expedita, quia
          voluptatibus perspiciatis doloremque eaque rem quaerat ratione
          possimus! Eligendi ducimus dignissimos doloribus aspernatur? Ex
          adipisci esse doloribus ullam placeat maxime blanditiis corporis rerum
          aspernatur accusantium quaerat, voluptates qui, illo nihil illum
          optio. Quod facere ipsum rerum temporibus exercitationem ducimus
          fugiat unde molestiae? Dolorum commodi nobis facere ratione. Veritatis
          adipisci dicta dolor tempore veniam porro reprehenderit molestias,
          expedita, magni ab corporis quam deleniti enim labore, nam nostrum ea
          sint neque cum. Totam iste corporis reiciendis. Quaerat ipsam
          explicabo fugit iusto placeat, quod animi, repudiandae necessitatibus
          similique possimus, cum sint officiis. Eius, odit nisi amet sunt
          distinctio omnis sed vitae dignissimos, illum voluptatibus
          reprehenderit. Nulla maxime quasi tempora, incidunt quibusdam odio
          eius earum non similique, blanditiis ut? Ullam corrupti officia
          tempore, modi reiciendis obcaecati nostrum aliquid commodi eius
          exercitationem architecto molestiae aperiam a quasi iste error
          accusamus sint soluta nam minima atque! Ipsum amet perspiciatis dolor
          similique distinctio doloremque ex quos possimus repudiandae ullam,
          blanditiis sequi autem reiciendis fuga, aliquid unde neque laboriosam
          consectetur. Quos, iste illo! Incidunt officiis at, corporis,
          temporibus similique animi quam dolorem qui tempore asperiores neque,
          vero iusto cum dolorum recusandae ipsam sint ad veniam nostrum. Saepe
          eveniet officiis veritatis, commodi harum deserunt eius modi voluptate
          praesentium at illum ducimus ut nostrum! Quas, pariatur. Quae sequi
          molestiae velit eum magnam quas natus vel maiores rem sit. Earum
          magnam perspiciatis corrupti aliquid rerum consequuntur modi soluta
          nesciunt facilis mollitia quasi sit magni animi laudantium corporis
          cupiditate accusantium, similique tempore nostrum laborum, aperiam
          ipsa dignissimos excepturi nulla. Blanditiis eos suscipit pariatur sit
          placeat iusto maiores natus quos et ipsa minus alias, architecto nobis
          neque laboriosam quaerat delectus assumenda ullam? Eligendi vitae
          eveniet cumque facilis dolor exercitationem impedit soluta quae, totam
          delectus cum voluptatem numquam, ipsa id! Eligendi fuga pariatur nulla
          voluptas atque ab deleniti debitis deserunt nam, hic cum, dicta rem
          reprehenderit veritatis est. Beatae, consequatur ad et eligendi
          consectetur repudiandae vel possimus eum vero modi laudantium totam
          maiores voluptatibus voluptas, aperiam praesentium! Architecto sit
          soluta ex qui officiis quam fuga possimus accusantium tenetur sed
          totam hic, explicabo odio magni temporibus assumenda doloribus,
          reiciendis quod repudiandae voluptates a! Eum expedita provident
          excepturi, ab quidem ea magnam amet consequatur, omnis nobis
          aspernatur. Illo consequuntur officiis, cum temporibus ullam nostrum
          corrupti explicabo pariatur? Porro sed maxime tempore impedit
          architecto ut iste. Quibusdam tempore incidunt, voluptatum maxime
          harum minima quas sed? Dolorem deserunt incidunt debitis iste. Minima
          reprehenderit quam accusantium harum repellendus et assumenda,
          provident accusamus placeat enim deleniti cum ad nulla eum dignissimos
          aliquam totam sed dolore. Ducimus dicta atque beatae fugit autem ab
          deserunt facilis officia esse quibusdam possimus corrupti hic
          necessitatibus aspernatur dolores nam commodi, fugiat, sequi
          consequatur enim veniam iste iure quasi eveniet? Et officia ad id.
          Pariatur nemo tempore ipsam excepturi iure ab ipsa. Fugiat, deserunt
          recusandae repudiandae, minima ut delectus maiores fugit perspiciatis
          nulla eveniet neque eligendi reiciendis labore accusamus quas eius
          odio explicabo et, incidunt error commodi architecto. Exercitationem
          laudantium architecto cumque ex quae consequuntur magni, nihil
          reprehenderit quisquam iste deserunt ea. Harum, repellendus? Alias,
          voluptatibus quod veritatis harum amet possimus doloribus excepturi
          sequi ut commodi molestiae iure id! Nostrum dolor dolorem distinctio
          officia dolorum minima omnis harum eum tenetur hic accusantium
          laboriosam nesciunt impedit numquam, facere odit fuga perferendis.
          Soluta est quia perferendis illum officiis, quis, expedita libero,
          provident asperiores placeat reprehenderit eum doloremque pariatur
          explicabo amet magni labore corrupti vel nostrum non similique.
          Explicabo delectus hic dolores, modi placeat molestias enim officia,
          sint iure aliquid rem eius facere dignissimos ad tenetur perferendis
          officiis! Perferendis dolores non assumenda unde iusto porro delectus
          sit, amet accusantium.
        </h1>
      </div>
    </div>
  );
}
